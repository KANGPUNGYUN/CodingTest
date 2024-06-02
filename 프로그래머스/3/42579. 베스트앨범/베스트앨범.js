function solution(genres, plays) {
    let map = new Map();

    for (let i = 0; i < genres.length; i++) {
        if (map.has(genres[i])) {
            const prevTotal = map.get(genres[i]).total;
            const prevFirst = map.get(genres[i]).first;
            const prevSecond = map.get(genres[i]).second;

            if (plays[i] > plays[prevFirst]) {
                map.set(genres[i], { total: prevTotal + plays[i], first: i, second: prevFirst });
            } else if (prevSecond === null || plays[i] > plays[prevSecond]) {
                map.set(genres[i], { total: prevTotal + plays[i], first: prevFirst, second: i });
            } else {
                map.set(genres[i], { total: prevTotal + plays[i], first: prevFirst, second: prevSecond });
            }
        } else {
            map.set(genres[i], { total: plays[i], first: i, second: null });
        }
    }

    const sortedMap = [...map].sort((a, b) => b[1].total - a[1].total);
    let res = [];
    for (let i = 0; i < sortedMap.length; i++) {
        res.push(sortedMap[i][1].first);
        if (sortedMap[i][1].second !== null) {
            res.push(sortedMap[i][1].second);
        }
    }

    return res;
}