console.log("Video 38")

const names = ["tungbm", "giang hoang thu", "nam"]

//index = 0 ; 
console.log("0 = ", names[0]);

names.push(true, false, 123);
console.log(names);

names.unshift(names);
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.forEach(function(value,index){
    console.log("value = ", value, " index = ", index)
})

console.log("================")
names.forEach((value,index) =>{
    console.log(`
        value = ${value}
        index = ${index}
        `)
})