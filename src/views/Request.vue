<template>
  <div class="container">
    <div class="text-center">
      <h3><router-link to="/">Home</router-link></h3>
      <div class="d-flex justify-content-center">
        <hr class="col-10">
      </div>
    </div>
    <h1 class="text-center">Request ID: <span class="badge badge-info"> {{ requestId }} </span></h1>
    <div id="result">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Model</th>
          <th scope="col">Count</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(rec, i) in report" v-bind:key="rec.model">
          <th scope="row">
            <span class="badge badge-secondary"> {{ i }} </span>
          </th>
          <td>
                <span :class="'badge badge-' + badges.next()">{{
                    rec.model
                  }}</span>
          </td>
          <td class="amount">
                <span class="badge badge-light">{{
                    new Intl.NumberFormat("en-US").format(rec.count)
                  }}</span>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>
import {getReport} from "@/common/query/getReport";
import Long from "long";
import {parseReport} from "@/common/parse/parseReport";
import {Badges} from "@/common/badges";

export default {
  name: 'Request',
  props: {
    requestId: String
  },
  data() {
    return {
      report: null,
      badges: new Badges(['success', 'warning', 'info']),
    }
  },
  async mounted() {
    console.log(this.requestId);
    this.report = parseReport((await getReport(Long.fromString(this.requestId))).trim().slice(4));
  }
}
</script>