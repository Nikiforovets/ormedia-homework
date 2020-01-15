var term = {
    Belarus: 0,
    Ukraine: 2,
    Canada: -6,
    Australia: 30,
    Brazil: 34,
    Russia: -4
}

var i = 0;
var sum = 0;
for(var country in term){
    sum += term[country] 
    i++;
}
console.log(sum/i);


function findMaxTemperature(obj){
    var max;
    for(var key in obj){
        if(max < obj[key] || max == undefined){
            max = obj[key];
        }
    }
    return max;
}

console.log(findMaxTemperature(term));