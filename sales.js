'user strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
const locations = ['Portland Airport', 'Pioneer Square', 'Powells', 'St Johns', 'Waterfront'];


/*
Store
    - name
    - location
    - cookieType
    - averageCookieSales
*/

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

//created a function with the prototype render ? to create table with store name and hourly sales data 
Store.prototype.render = function (){
    const tbody = document.getElementById ('table-body');
    const tr = document.createElement('TR');
    const th = document.createElement('TH');
    th.textContent=this.name;
    tr.appendChild(th);
  
    tbody.appendChild(tr)

    for (let i =0; i < hours.length; i++) {
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

console.log(pdx);

pdx.render();
pioneer.render();
powells.render();
stJohns.render();
waterfront.render();

renderHoursRow();




function getRandomInInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1 )) + min;
}

function renderHoursRow (){
    const thead = document.getElementById('table-head');
    const tr = document.createElement('TR');
    thead.appendChild(tr);
    const emptyTh = document.createElement('TH');
    tr.appendChild(emptyTh);

    for (let i=0; i < hours.length; i++) {
        const hour = hours[i];
        const th = document.createElement('TH');
        th.textContent = hours[i];
        tr.appendChild(th);
    }
}