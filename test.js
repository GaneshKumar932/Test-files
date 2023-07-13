function compressString(str) {
    
    let compressed = '';
    let count = 1 ;
    let array = str.split('');
    console.log(array);
    array.reduce((previousValue,currentValue)=>{

      console.log("previousvalue",previousValue, "currentValue",currentValue);
      
      if(previousValue===currentValue){
              count++; 
      }else{  
        compressed += count + previousValue;
        count = 1;
             }
      return currentValue;
    });
    compressed += count + array[array.length - 1];

    return compressed;
  }
  
  const input = 'AAAABBBCCDAASSSSdddd';
  const compressedString = compressString(input);
  console.log(compressedString);
  document.getElementById('test').innerHTML = compressedString ;


function findrepeat(array){

  let result=array.reduce((total,currentValue,)=>{
  
    if(total[currentValue]){
            total[currentValue]=total[currentValue]+ 1; 
    }else{  
       total[currentValue]=1;
           }
    return total;
  },{});
  let repeatedTimes = Object.values(result);
  let keys = Object.keys(result);
  let final = Math.max(...repeatedTimes)*keys[repeatedTimes.lastIndexOf(Math.max(...repeatedTimes))]
return final;
};
    
const array1= [1,1,5,5,5,5,5,7,7,7,7,7,7,2,2,2,2,2,4,4,4];
const finalresult = findrepeat(array1);
document.getElementById('test1').innerHTML = finalresult ;
console.log('hi');

