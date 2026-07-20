console.log("video 30")

const sum = (a,b,c) => {
    console.log("run before");
    
    if(typeof a !== 'number'){
        console.log("run empty return");
        return;
    }
    console.log("run after");
    return a +b +c;
};

console.log(sum('tung',4,5));