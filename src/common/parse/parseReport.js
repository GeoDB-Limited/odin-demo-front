export function parseReport(report) {
    const records = report.split('\n');
    let res = [];
    for (const record of records) {
        let [key, value] = record.split(' => ');
        res.push({model: key, count: value});
    }
    return res
}