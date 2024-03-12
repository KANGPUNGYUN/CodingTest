function solution(skill, skill_trees) {
	const regex = new RegExp(`[^${skill}]`, 'g');
    let res = 0;
    for(let i=0; i<skill_trees.length; i++){
        if(skill_trees[i].replace(regex, "").length === 0){
            res++
        } else if(skill.includes(skill_trees[i].replace(regex, "")) && skill[0] === skill_trees[i].replace(regex, "")[0]){
            res++
        }
    }
    return res
}