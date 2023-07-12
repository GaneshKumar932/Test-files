function compressString(str) {
    let compressed = '';
    let count = 1;
  
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        compressed += count + str[i - 1];
        count = 1;
      }
    }
  
    return compressed;
  }
  
  const input = 'AAAABBBCCDAA';
  const compressedString = compressString(input);
  console.log(compressedString);
  document.getElementById('test').innerHTML = compressedString ;


function findrepeat(array){
  let count = [] ;
  for (let i = 0; i<= Math.max(...array) ; i++) {
    let filtered = array.filter((val)=>{return val===i;});
    if(filtered.length > 0){
      count[i]= filtered.length
    }else{
      count[i]=0;
    }
  }
  console.log(count);
  if(count.length > 0){
    return Math.max(...count)* count.lastIndexOf(Math.max(...count))
  }
};
    
const array1= [1,1,2,2,2,2,2,150,150,150,150,150,150,4,4,4,4];
const finalresult = findrepeat(array1);
document.getElementById('test1').innerHTML = finalresult ;
console.log(finalresult);
console.log('hi');

