'user strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

function hourlySales(){
    const salesByHour= [];
    for (let i=0; i < hours.length; i++) {
        const hour = hours[i];
        const custPerHour = getRandomInInclusive(this.min, this.max);
        const cookiesPerHour = custPerHour * this.avg;
        // const cookiesPerHour = Math.floor(custPerHour * this.avgSold);
        const oneHour = {
            hour: hour,
            cookiesSold: cookiesPerHour
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
}
function getRandomInInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1 )) + min;
}



// function hourlySales(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//     +}

const pdx = {
    min: 23,
    max: 65,
    avg: 6.3,
    salesByHour: hourlySales, //calculates total
//     calcSales: function () { remove
    render: function () {
    const li = document.createElement('li');
    li.textContent = this.hour + '' + this.salesByHour;
    return li;
    }
};
pdx.hourlySales();
console.log(pdx);

// const pioneer = () {
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     salesByHour: hourlySales, 

//     render () {

//     }
// };
// pioneer.salesByHour();

// const powells = () {
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     salesByHour: hourlySales,
//     calcSales: function () {

//     },

//     render () {

//     }
// };
// powells.calcSales();

// const stjohns = () {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     salesByHour: hourlySales,
//     calcSales: function () {

//     },

//     render () {

//     }
// };
// stjohns.calcSales();

// const waterfront = () {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     salesByHour: hourlySales,
//     calcSales: function () {

//     },

//     render () {

//     }
// };
// waterfront.calcSales();

// // from: https://developer.mozilla.or/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// //     return Math.floor(Math.random()* (max -min +1) + min);
// // }

// // const store = 
