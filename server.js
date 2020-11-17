`use strict`

const vehicles = require(`./vehicles.json`);
const start = Date.now();

const result = vehicles

.filter(vehicle => vehicle.regulatoryCompliance.technomechanicalExpirationDate > start)
.map(vehicle => vehicle.colors)
.reduce((acc,colors) => colors );


console.log(JSON.stringify(result));

