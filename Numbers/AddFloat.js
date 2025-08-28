 
let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);
​
function gfg_Run() {
    console.log("2.3 + 2.4 = "
        + (parseFloat('2.3') +
            parseFloat('2.4')).toFixed(2));
}
gfg_Run()






let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);
​
function gfg_Run() {
    console.log("2.3 + 2.4 = " +
        Math.round((parseFloat('2.3')
            + parseFloat('2.4')) * 100) / 100);
}
gfg_Run()




let val = Number('2.3') + Number('2.4');
console.log("2.3 + 2.4 = " + val);
​
function gfg_Run() {
    let sum = Number('2.3') + Number('2.4');
    let formattedSum = new Intl.NumberFormat('en-US', 
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(sum);
    console.log("2.3 + 2.4 = " + formattedSum);
}
gfg_Run();