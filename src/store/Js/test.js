let ID = new Date().getTime();
let title = "Tuscan chicken";
console.log(title.replace(/[^\w]/g, '')+ID)