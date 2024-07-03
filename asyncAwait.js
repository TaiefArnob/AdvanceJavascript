let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Apple', 'Banana'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Stick'],
    Toppings: ['Chocolate', 'Peanuts']
};

let isShopOpen = true;

function order(time, work) {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log('Our Shop Is Closed'));
        }
    });
}

async function kitchen() {
    try {

        await order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`));

        await order(1000, () => console.log('Production has started.'));

        await order(2000, () => console.log('The fruit is chopped.'));

        await order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were selected.`));

        await order(1000, () => console.log('Start the machine.'));

        await order(2000, () => console.log(`${stocks.Holder[0]} is selected.`));

        await order(2000, () => console.log(`${stocks.Toppings[0]} is selected.`));

        await order(2000, () => console.log('Ice cream is ready.'));
        
    } catch {
        console.log('Customer left.');
    } finally {
        console.log('Day ends. Shop is closed.');
    }
}

kitchen();
