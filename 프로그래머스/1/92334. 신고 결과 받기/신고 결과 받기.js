function solution(id_list, report, k) {
    let count = Array(id_list.length).fill(0)
    let reportList = {};
    
    id_list.map((id)=>{reportList[id] = []});
    
    [...new Set(report)].map((report_list)=>{
        const [id, reported] = report_list.split(" ");
        reportList[reported].push(id);
    })
    
    for(let i in reportList){
        if(reportList[i].length >= k){
            reportList[i].map((id)=>{count[id_list.indexOf(id)] += 1})
        }
    }
    
    return count
}