let stocks={
    Fruits:['Strawberry','Grapes','Apple','Banana'],
    Liquid:['Water','Ice'],
    Holder:['Cone','Cup','Stick'],
    Toppings:['Chocolate','Peanuts']
};


let isShopOpen=true;

function order(time,work){
    
    return new Promise( (resolve,reject)=>{
        
        if(isShopOpen){
            
            setTimeout( ()=>{
                resolve(work())
            },time)
            
        }
        else{
            reject(
                console.log('Our Shop Is Closed')
            )
        }

    } )
}

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected.`))


.then(()=>{
    return order(1000,()=>console.log('Production has started.'));
})

.then(()=>{
    return order(2000,()=>console.log('The fruit is chopped.'))
})

.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected.`)
    })
})

.then(()=>{
    return order(1000,()=>{
        console.log('Start the machine.');
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.Holder[0]} is selected.`);
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.Toppings[0]} is selected.`);
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log('Icecream is ready.');
    })
})

// If rejected then catch is triggered

.catch(()=>{
    console.log(`Customer left.`);
})

// Finally handler will run at the end of function no matter it is resolved or rejected

.finally(()=>{
    console.log('Day ends.Shop is closed.');
})


