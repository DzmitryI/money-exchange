// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    // Your code goes here!
    let monye_exchange = {};
    // console.log(currency);
    let arrH = new Array("H", 50);
    let arrQ = new Array("Q", 25);
    let arrD = new Array("D", 10);
    let arrN = new Array("N", 5);
    let arrP = new Array("P", 1);
    let arr = new Array(arrH, arrQ, arrD, arrN, arrP);
    // console.log(arr);
    if (currency <= 0) return monye_exchange;
    else if (currency > 10000) {
        monye_exchange["error"] = "You are rich, my friend! We don\'t have so much coins for exchange";
        return monye_exchange;
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][1] <= currency) {
                let mass = value_currency(currency, arr[i][1]);
                name = arr[i][0];
                value = mass[1];
                value_cur = mass[0];
                // console.log(value+": "+mass);
                monye_exchange[name] = value;
                //  console.log(monye_exchange);
                currency = value_cur;
                // console.log("currency "+currency+" value "+value);
            }
        }
        // console.log(monye_exchange);
        return monye_exchange;
    }
}
const value_currency = (currency, H) => {
    let Hval = parseInt(currency / H);//берем целую часть числа    
    currency = currency - Hval * H;
    return [currency, Hval];
}
