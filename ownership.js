`use strict`

const vehicles = require(`./vehicles.json`);

const result = vehicles


.map(vehicle => vehicle.ownership) 
.reduce((acc,val,index,array) => {

  let  total = acc[val];
  if(total === undefined){

    total = 0 ;

  }
  acc[val] = total + 1 ;
  
  return acc;

  /*return index !== (array.length - 1)
  ? acc
  :Object.entries(acc)
  
  .map(([ownership , total]) => ({ownership ,total}));*/
}, {}) 
//.sort((obj1, obj2) => obj2.total - obj1.total);


console.log(result)


