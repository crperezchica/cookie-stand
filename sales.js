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

function render(storeName) {
    const div = document.getElementById('sales');
    const h2 = document.createElement('h2');
    h2.textContent = storeName;
    div.appendChild(h2);
    const ul = document.getElementById('sales');
    for (let i = 0; i < hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = hours[i] + '' + this.salesByHour[i].cookiesSold + ' cookies '; 
        ul.appendChild(li);
 
    }

}

const pdx = {
    name: 'PDX Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales, 
    salesByHour: [],
    render: render,
};
pdx.hourlySales();
pdx.render(pdx.name);


const pioneer = { 
    name: 'Pioneer Square', 
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,
    SalesByHour: [],
    render: render,
    
};
pioneer.hourlySales();
pioneer.render(pioneer.name);

const powells = {
    name: 'Powells',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
powells.hourlySales();
powells.render(powells.name);

const stJohns =  {
    name: 'St Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
stJohns.hourlySales();
stJohns.render(stJohns.name);

const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
waterfront.hourlySales();
waterfront.render(waterfront.name);

// from: https://developer.mozilla.or/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//     return Math.floor(Math.random()* (max -min +1) + min);


