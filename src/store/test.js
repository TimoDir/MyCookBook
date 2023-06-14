const complementaryTags = [`#Main dish`, `#Low cost`, `#2024`];
let arrayToReturn = [];
complementaryTags.forEach(tag =>{
    let hastagsFormat = tag.split(' ');
    hastagsFormat = hastagsFormat.map(split =>{ 
        if(!split.includes('#')){
            let upercaseWord = split[0].toUpperCase() + split.slice(1);
            return upercaseWord
        } else return split;
    });
    arrayToReturn.push(hastagsFormat.join(''))
});

console.log(arrayToReturn);