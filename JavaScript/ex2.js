//verificar se um numero é primo 
function ehprimo(num) {
    if(num<2) return false;
    for(let i=2; i< num; i++) {
        if(num%i === 0) return false;
    }
   return true
}
console.log(ehprimo(7));