// Asynchronous Function

console.log('I');

console.log(' eat');



console.log(' with a');

console.log(' spoon.');

setTimeout(()=>{
    console.log(' ice cream');
},4000);


//Callback Fuunction

 function one(callback){
    console.log('Step 1 is completed.Please call step 2.');
    callback();
}

function two(){
    console.log('Step 2');
}

one(two);
