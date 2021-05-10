<template>
  <div class="container">
    <form id="create-request" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <div class="form-row">
          <div class="col-8">
            <label for="oracle-script-id">Oracle script id</label>
            <select class="form-control" id="oracle-script-id" name="oracle-script-id" v-model="oracleScript">
              <option v-for="script in oracleScripts" v-bind:key="script.id.toString()"
                      v-bind:value="script.id.toString()">{{ script.name }}
              </option>
            </select>
          </div>
          <div class="col-2">
            <label for="ask-count">Ask count:</label>
            <input class="form-control" type="number" id="ask-count" name="ask-count" min="1" max="10"
                   v-model="askCount">
          </div>
          <div class="col-2">
            <label for="min-count">Min count:</label>
            <input class="form-control" type="number" id="min-count" name="min-count" min="1" max="10"
                   v-model="minCount">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="calldata">Call data</label>
        <select multiple class="form-control" id="calldata" name="calldata" v-model="phonesSelected">
          <option v-for="phone in phones" v-bind:key="phone" v-bind:value="phone">{{ phone }}</option>
        </select>
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="col-6">
            <label for="sender">Sender</label>
            <input type="text" class="form-control" id="sender" name="sender" disabled
                   placeholder="odin1nnfeguq30x6nwxjhaypxymx3nulyspsuja4a2x" v-model="sender">
          </div>
          <div class="col-6">
            <label for="fee-limit">Fee limit</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">ODIN</div>
              </div>
              <input class="form-control" id="fee-limit" name="fee-limit" type="number" min="0"
                     max="1000000000000000000" placeholder="1000000" v-model="feeLimit">
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary form-control" :disabled=transactionSubmitting value="Submit"/>
      </div>
    </form>
    <div class="container loader" v-show="transactionSubmitting">
      <div class="row d-flex justify-content-center">
        <Loader></Loader>
      </div>
    </div>
    <div :class="'alert alert-' + alertClass" role="alert" v-show="alertShow">
      {{ alertText }}
    </div>
  </div>
</template>

<script>
import {setupOracleExtension} from '@/common/extensions/oracleExtension.js'
import {QueryClient} from '@cosmjs/stargate'
import {Tendermint34Client} from '@cosmjs/tendermint-rpc'
import config from '@/assets/config.json'
import {coins} from "@cosmjs/launchpad"
import Long from 'long'
import {ObiStruct} from '@bandprotocol/obi.js'
import {CreateRequest} from '@/common/tx/utils.js'
import Loader from "@/components/Loader";

export default {
  name: 'NewRequest',
  props: {
    phones: Array
  },
  data() {
    return {
      oracleScript: '0',
      askCount: '1',
      minCount: '1',
      sender: 'odin1pl07tk6hcpp2an3rug75as4dfgd743qp80g63g',
      feeLimit: '1',
      phonesSelected: [],
      oracleScripts: [],
      transactionSubmitting: false,
      // alert
      alertClass: "",
      alertText: "",
      alertShow: false,
    }
  },
  async mounted() {
    const client = QueryClient.withExtensions(
        await Tendermint34Client.connect(config.rpc),
        setupOracleExtension
    )
    this.oracleScripts = await client.oracle.unverified.oracleScripts(new Long(10), new Long(0))
    if (this.oracleScripts.length > 0) {
      this.oracleScript = this.oracleScripts[0].id.toString();
    }
  },
  methods: {
    async onSubmit() {
      this.setAlert(false);
      if (this.phonesSelected.length < 1) {
        this.setAlert(true, "warning", "Warning: At least one phone model should be selected");
        return
      }

      const msg = {
        oracleScriptId: Long.fromString(this.oracleScript),
        askCount: Long.fromString(this.askCount),
        minCount: Long.fromString(this.minCount),
        prepareGas: new Long(200000),
        executeGas: new Long(200000),
        calldata: new ObiStruct('{models:[string]}').encode({
          "models": this.phonesSelected
        }).toString('base64'),
        clientId: "1",
        // odin1pl07tk6hcpp2an3rug75as4dfgd743qp80g63g
        sender: this.sender,
        feeLimit: coins(Number.parseInt(this.feeLimit), "odin")
      };

      console.log(msg);
      const [alertShow, alertClass, alertText] = this.validateMsg(msg);
      this.setAlert(alertShow, alertClass, alertText);

      this.transactionSubmitting = true;
      try {
        const requestId = await CreateRequest(msg);
        setTimeout(async () => {
          this.transactionSubmitting = false;
          console.log("loaded");
          console.log(requestId);
          await this.$router.push({path: `/request/${requestId}`});
        }, 10000)
      } catch (err) {
        this.setAlert(true, "danger", `Error: ${err.message}`);
        this.transactionSubmitting = false;
      }
    },
    setAlert(alertShow, alertClass = "", alertText = "") {
      this.alertClass = alertClass;
      this.alertShow = alertShow;
      this.alertText = alertText;
    },
    validateMsg(msg) {
      if (msg.askCount < msg.minCount) {
        return [true, "warning", "Warning: Ask count should be greater or equal than Min count"];
      }
      return [false, "", ""]
    }
  },
  components: {
    Loader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
