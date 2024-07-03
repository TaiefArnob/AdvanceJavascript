
let stocks={
    Fruits:['Strawberry','Grapes','Banana','Apple'],
    Liquid:['Water','Ice'],
    Holder:['Cone','Cup','Stick'],
    Toppings:['Chocolate','Peanuts']
};


function order(fruitName,callProduction){
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruitName]} is selected`);


        callProduction();

    },1000)
    
}


// CallBack Hell is down here!


function production(){
    setTimeout(()=>{
       console.log('Production has started.'); 

       setTimeout(()=>{
            console.log(`Fruit has been chopped`);

            setTimeout(()=>{
             console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added.`); 
             
             setTimeout(()=>{
                console.log("The machine is started.");

                setTimeout(()=>{
                    console.log(`${stocks.Holder[0]} is selected.`);

                    setTimeout(()=>{
                        console.log(`${stocks.Toppings[1]} is added in toppings`);

                        setTimeout(()=>{
                            console.log('Icecream is ready.');
                        },2000)
                    },3000)
                },2000)
             },1000)
             
            },1000)
       },2000)
    },2000)

}

order(0,production);