'user strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

const locations = ('Portland Airport', 'Pioneer Square', 'Powells', 'St Johns', 'Waterfront');
//Class created via a constructor function. 
function Store (name, min, max, avg) {
    this.name=name; //created method for name by using this.
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.hourlySales();

}

//since we created a constructor function and an instance of a store. I had to create a prototype of the store for hourly sales and the function created to run/calculate 
//lives within the this fuction
Store.prototype.hourlySales = function (){
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


 function(){
    const thead = document.getElementById('table-head');
    const tr = document.createElement('TR');
    tr.appendChild(thead)

    for (let i=0; i < hours.length; i++) {
        const hour = hours[i];
        const th = document.createElement('TH');
        th.textContent = hours([i]);
        th.appendChild(tr);
    }
    
} 



 //created a function with the prototype render ? to create table with store name and hourly sales data 
Store.prototype.render = function (){
    const tbody = document.getElementById ('table-body');
    const tr = document.createElement('TR');
    const th = document.createElement('TH');
    th.textContent=this.name;
    tr.appendChild(th);
  
    tbody.appendChild(tr)

    for (let i =0; i < hours.length; i++){
        const td = document.createElement('TD');
        td.textContent = this.salesByHour[i].cookiesSold;
        tr.appendChild(td);
    }

}


//constructor function is used to populate each of the stores with the parameters being pased under new Store in between ();
const pdx = new Store ('Portland Airport', 23, 65, 6.3 );
const pioneer = new Store ('Pioneer Square', 3, 24, 1.2);
const powells = new Store ('Powells', 11, 38, 3.7);
const stJohns = new Store ('St Johns', 20, 38, 2.3);
const waterfront = new Store ('Waterfront', 2, 16, 4.6);

console.log(pdx)

pdx.render();
pioneer.render();
powells.render();
stJohns.render();
waterfront.render();


// function storeHours ([hours]){
//     const thread = document.getElementById('table-head');
//     const th = document.createElment('headerhours');
//     th.textContent=hours;
//     thread.appendChild(th);

//Function render created for lab6 to obtain data in a list with content
// function render(storeName) {
//     const div = document.getElementById('sales');
//     const h2 = document.createElement('h2');
//     h2.textContent = storeName;
//     div.appendChild(h2);
//     const ul = document.getElementById('sales');
//     for (let i = 0; i < hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = hours[i] + '' + this.salesByHour[i].cookiesSold + ' cookies '; 
//         ul.appendChild(li);
 
//     }

// }

// }
// const pdx = {
//     name: 'PDX Airport',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     hourlySales: hourlySales, 
//     salesByHour: [],
//     render: render,
// };
// pdx.hourlySales();
// pdx.render(pdx.name);


// const pioneer = { 
//     name: 'Pioneer Square', 
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     hourlySales: hourlySales,
//     SalesByHour: [],
//     render: render,
    
// };
// pioneer.hourlySales();
// pioneer.render(pioneer.name);

// const powells = {
//     name: 'Powells',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     hourlySales: hourlySales,
//     salesByHour: [],
//     render: render,
// };
// powells.hourlySales();
// powells.render(powells.name);

// const stJohns =  {
//     name: 'St Johns',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     hourlySales: hourlySales,
//     salesByHour: [],
//     render: render,
// };
// stJohns.hourlySales();
// stJohns.render(stJohns.name);

// const waterfront = {
//     name: 'Waterfront',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     hourlySales: hourlySales,
//     salesByHour: [],
//     render: render,
// };
// waterfront.hourlySales();
// waterfront.render(waterfront.name);

// from: https://developer.mozilla.or/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//     return Math.floor(Math.random()* (max -min +1) + min);

// Store.prototype.render = function (){
//     const tbody = document.getElementById ('table-body');
//     const row = document.createElement('TR');
//     const rowHeader = document.createElement('TH')
//     rowHeader.textContent=this.name
//     tableRow.appendChild
//     const title = document.createElement('tablestore');
//     title.textContent=this.name;
