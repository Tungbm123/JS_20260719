console.log("Video 41")
//array filter

const ages = [10,120,230,43,65,19];
const agesX2 = ages.map((item, index)=> {
    return item*2;
})

const agesGreatThan18 = ages.filter((item, index)=> {
    return item > 18;
})

console.log("original: ", ages);
console.log("agesGreatThan18: ",agesGreatThan18);