numbers = process.argv.slice(2);
sum = 0;
numbers.forEach( function(n) {
    sum += Number(n);
});
console.log(sum);
