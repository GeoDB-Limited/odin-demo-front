import {setupOracleExtension} from "@/common/extensions/oracleExtension.js"
import {QueryClient} from "@cosmjs/stargate"
import {Tendermint34Client} from "@cosmjs/tendermint-rpc"

import config from '@/assets/config.json'
import {err} from "@/common/errors/errors.js"

export async function getReport(requestId) {

    const client = QueryClient.withExtensions(
        await Tendermint34Client.connect(config.rpc),
        setupOracleExtension,
    );

    const report = await client.oracle.unverified.request(requestId).catch(err);
    const res = new TextDecoder().decode(report.request.responsePacketData.result);
    console.log("Raw report: ", report);
    console.log("Result: \n", res);
    return res;
}

if (require.main === module) {
    main();
}