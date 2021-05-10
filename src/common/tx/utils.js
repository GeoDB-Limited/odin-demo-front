import {DirectSecp256k1HdWallet, Registry} from "@cosmjs/proto-signing"
import {SigningStargateClient, defaultRegistryTypes} from "@cosmjs/stargate";
import {coins} from "@cosmjs/launchpad"
import config from '@/assets/config.json'
import {MsgRequestData} from "@/common/generated/dist/oracle/v1/tx.js";
const {err} = require("@/common/errors/errors.js");
// import {stringToPath} from "@cosmjs/crypto";
// const HD_DERIVATION = stringToPath("m/44'/118'/0'/0/0");

export async function CreateRequest(msg) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(config.mnemonic, {prefix: "odin"});

    const registry = new Registry();
    const typeUrl = "/oracle.v1.MsgRequestData";
    registry.register(typeUrl, MsgRequestData);

    const msgAny = {
        typeUrl: typeUrl,
        value: msg,
    };

    const res = await BroadcastMsg(wallet, registry, msgAny);

    return JSON.parse(res.rawLog)[0].events[2].attributes[0].value
}

export async function BroadcastMsg(wallet, registry, msgAny) {
    defaultRegistryTypes.map((v) => {
        registry.register(v[0], v[1]);
    });

    let [account] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(config.rpc, wallet, {registry: registry});

    const fee = {
        amount: coins(0, "odin"),
        gas: "2000000"
    }

    console.log("Submitting transaction...");
    const res = await client.signAndBroadcast(account.address, [msgAny], fee).catch(err);
    console.log("Tx result:", res);
    return res;
}
