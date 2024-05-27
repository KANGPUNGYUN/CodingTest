function solution(bridge_length, weight, truck_weights) {

    let time = 0;
    let bridge = [];
    let bridgeWeight = 0;

    for (let i = 0; i < bridge_length; i++) {
        bridge.push(0);
    }

    while (bridge.length > 0) {
        time++;
        
        bridgeWeight -= bridge.shift();

        if (truck_weights.length > 0) {
            if (bridgeWeight + truck_weights[0] <= weight) {
                let nextTruck = truck_weights.shift();
                bridge.push(nextTruck);
                bridgeWeight += nextTruck;
            } else {
                bridge.push(0);
            }
        }
    }

    return time;
}