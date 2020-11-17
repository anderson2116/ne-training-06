`use strict`

const vehicles = require(`./vehicles.json`);

const result = vehicles



.reduce((acc ,val) => {
let currentvalue =  acc.find(a => {
    return a.year === val.year})
if (currentvalue){
    currentvalue.vehicles.push(val.plate)
}
else{
    currentvalue = {year : val.year, vehicles: [val.plate]}
    acc.push(currentvalue);
}
return acc;
}, [])
.sort((a,b) => a.year-b.year);
   

console.log(result)