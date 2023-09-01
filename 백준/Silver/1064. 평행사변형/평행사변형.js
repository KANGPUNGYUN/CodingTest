let [xa,ya,xb,yb,xc,yc] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if((xb-xa)*(yc-ya) === (yb-ya)*(xc-xa)){
    console.log(-1.0)
}else{
    let case1 = ((xa-xb)**2+(ya-yb)**2)**(1/2) + ((xb-xc)**2+(yb-yc)**2)**(1/2)
    let case2 = ((xa-xb)**2+(ya-yb)**2)**(1/2) + ((xa-xc)**2+(ya-yc)**2)**(1/2)
    let case3 = ((xa-xc)**2+(ya-yc)**2)**(1/2) + ((xb-xc)**2+(yb-yc)**2)**(1/2)
    console.log(2*(Math.max(case1, case2, case3)-Math.min(case1, case2, case3)))
}