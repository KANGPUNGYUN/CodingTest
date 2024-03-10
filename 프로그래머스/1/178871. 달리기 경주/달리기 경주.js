function solution(players, callings) {
    var dic = {};
    var answer = [];

    for (var i = 0; i < players.length; i++) {
        dic[players[i]] = i + 1;
        dic[i + 1] = players[i];
    }

    callings.forEach((item) => {
        var my_name = item;
        var obbs_name = dic[dic[item] - 1];
        var my_score = dic[item];
        var obbs_score = dic[obbs_name];

        dic[my_score] = obbs_name;
        dic[obbs_score] = my_name;
        dic[my_name] = obbs_score;
        dic[obbs_name] = my_score;
    });

    for (var i = 1; i < players.length+1; i++) {
        answer.push(dic[i]);
    }

    return answer;
}
