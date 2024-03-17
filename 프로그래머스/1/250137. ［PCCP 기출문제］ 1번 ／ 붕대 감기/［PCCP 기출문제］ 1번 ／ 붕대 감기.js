function solution(bandage, health, attacks) {
    let isDead = false;
    let hp = health;
    let timing = 0;
    
    attacks.forEach(v => {
        let duration = v[0] - timing - 1;
        let nextHp = hp + (duration * bandage[1] 
                    + (Math.floor(duration / bandage[0]) * bandage[2]));

        timing = v[0];
        
        hp = nextHp > health ? health : nextHp;
        hp -= v[1];
        
        if (hp < 1) isDead = true;
    })
    
    console.log(attacks)
    
    return isDead ? -1 : hp;
}