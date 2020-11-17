`use strict`

const vehicles = require(`./vehicles.json`);
let start = Date.now() + (86400000 * 60);

const result = vehicles

.filter(vehicle => vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate < start  || 
    vehicle.regulatoryCompliance.operationCardExpirationDate < start  ||
     vehicle.regulatoryCompliance.technomechanicalExpirationDate < start )
     
     .map(vehicle => {
         const finalData = {};
         const expiredData = [];
         if(vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate < start){
             expiredData.push("mandatoryInsurance");
         }
         if(vehicle.regulatoryCompliance.operationCardExpirationDate < start){
            expiredData.push("operationCard");
        }
        if(vehicle.regulatoryCompliance.technomechanicalExpirationDate < start){
            expiredData.push("technomechanical");
        }
        
        finalData[vehicle.plate]=expiredData;
         return finalData
     })



console.log(result)




