'user strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

function hourlySales(){
    const salesByHour= [];
    for (let i=0; i < hours.length; i++) {
        const hour = hours[i];
        const custPerHour = getRandomInInclusive(this.min, this.max);
        const cookiesPerHour = Math.round(custPerHour * this.avg);
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



// const pdx = {
    // min: 23,
    // max: 65,
    // avg: 6.3,
    // hourlySales: hourlySales, 
    // salesByHour: [],
    // render: render
    // function render () {
    //     // const ul = document.createElement('li');
    //     // li.textContent = this.hour + '' + this.salesByHour;
    //     // return li;
    //     for(let i=0; i <= salesByHour.length; i++){
    //         app.appendendChild(salesByHour[i].render());
        // }
        // }

// };
// pdx.hourlySales();
// console.log(pdx);
// loadCookies(salesByHour);

// const div = document.getElementById ('store');
// const h2 = document.createElement ('h2');
// h2.textContent = pioneer.name;
// div.appendChild(h2);
// console.log(div);
// console.log(h2);

// const ul = document.gentElementId('list');
// for (let i=0; i < hours.lenght; i++) {
//     const li = document.createElement('li');
//     li.textContent = hours [i] + ':' + pioneersalesHour[i].cookiesSold + 'cookies';
//     h2.appendChild(ul);
//     ul.appendChild(li);
// }

const pioneer = { 
    name: 'Pioneer Square', 
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,
    //salesByHour: [],
    
};
pioneer.hourlySales();

const div = document.getElementById ('store');
const h2 = document.createElement ('h2');
h2.textContent = pioneer.name;
div.appendChild(h2);
console.log(div);
console.log(h2);

const ul = document.getElementById('list');
for (let i = 0; i < hours.length; i++) {
    const li = document.createElement('li');
    li.textContent = hours[i] + ':' + pioneer.salesByHour[i].cookiesSold + 'cookies';
    h2.appendChild(ul);
    ul.appendChild(li);
}

// const pioneerdiv = document.getElementById('pioneerdiv');
// const pioneerh2 = document.createElement('h2');
// pioneerh2.textContent = pioneer.name;
// pioneerdiv.appendChild(pioneerh2);

// const pioneerlist = document.getElementById('pioneerul');
// for(let i = 0; i<pioneer.salesByHour.length; i++) {
//     const li = document.createElement ('li');
//     li.textContent = pioneer.salesByHour[i].hour + '-' + pioneer.salesByhour[i].cookiesSold
//     pioneerlist.appendChild(li);
// };

//      render: function () {
//         const li = document.createElement('li');
//         li.textContent = this.hour + '' + this.salesByHour;
//         return li;
//         }
//  };
// pioneer.hourlySales();
// console.log(pioneer);

// const powells = {
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     salesByHour: hourlySales,
//     render: function () {
//         const li = document.createElement('li');
//         li.textContent = this.hour + '' + this.salesByHour;
//         return li;
//         }
// };
// powells.hourlySales();
// console.log(powells);

// const stjohns =  {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     salesByHour: hourlySales,

//     render: function () {
//         const li = document.createElement('li');
//         li.textContent = this.hour + '' + this.salesByHour;
//         return li;
//         }
// };
// stjohns.hourlySales();
// console.log(stjohns);

// const waterfront = {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     salesByHour: hourlySales,
//     render: function () {
//         const li = document.createElement('li');
//         li.textContent = this.hour + '' + this.salesByHour;
//         return li;
//         }
// };
// waterfront.hourlySales();
// console.log(waterfront);

// // // from: https://developer.mozilla.or/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// // //     return Math.floor(Math.random()* (max -min +1) + min);
// // // }

// // // const store = 
// // pdx.hourlySales();
// // console.log(pdx);
