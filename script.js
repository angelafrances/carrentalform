var cars = { 
  name: 'PVD Car Rentals',
  types: ['economy', 'midsize'],
  econCount: 30,
  midCount: 25
 
};


var rentals = {
    types: [
        {
            model: 'Select One',
            count: '',
            cost: ''
        },
        {
            model: 'Volvo',
            count: 11, 
            cost: '$64'
        },
        {
            model: 'Saab',
            count: 13,
            cost: '$72'
        },
        {
            model: 'Fiat',
            count: 0,
            cost: '$98'
        },
        {
            model: 'Audi',
            count: 8,
            cost: '$108'
        }
    ]
    
};


var renters = {
    each: [

        {
        name:'Joe',
        rental:'fiat'
        },
        {
        name:'Amy', 
        rental:'audi'
        },
        
    ],
    
        addRental: function() {
            var inputName = document.getElementById('rentername').value;
            // var modelname = document.getElementById('dropdown').value;
            var inputCars = document.getElementById('model' + document.getElementById('dropdown').value).innerHTML;
            renters.each.push(
                 {
                     name: inputName,
                     rental: inputCars
                 }
            );
            alert('success! you are booked!');
        }
    
}


window.onload = function() {
    document.getElementById('bizName').innerHTML = cars.name;
};


   function clicked_on(){
        
        document.getElementById('econCars').innerHTML = cars.types[0];
        document.getElementById('econCarsAvail').innerHTML = cars.econCount;
        document.getElementById('midCars').innerHTML = cars.types[1];
        document.getElementById('midCarsAvail').innerHTML = cars.midCount;
    }
    
    function midRent() {
        cars.midCount--;
        document.getElementById('midCarsAvail').innerHTML = cars.midCount;
    }
    
    function econRent() {
        cars.econCount--;
        document.getElementById('econCarsAvail').innerHTML = cars.econCount;
    }
    
 
    function checkForm() {
        var formFill = document.getElementById('rentername').value;
        var dropFill = document.getElementById('dropdown').value;
       
        if ((formFill.length > 0) && (dropFill != '0')) {
            renters.addRental();
        //   alert('help');  
        } else {
            alert('you must enter name AND select one option from dropdown menu');
            document.getElementById("submitbutton").disabled = true;
            
        }
        
    }
    
    function submitOn () {
        document.getElementById('submitbutton').disabled = false;
    }


function displayDetails(xyz) {
    var xyz = document.getElementById('dropdown').value;
    document.getElementById('available').innerHTML = rentals.types[xyz].count;
    document.getElementById('price').innerHTML = rentals.types[xyz].cost;
    
    
    if (document.getElementById('available').innerHTML == '0')  {
        alert("oops! this model is no longer available, please select another model");
        document.getElementById('submitbutton').disabled = true;
    } else {document.getElementById('submitbutton').disabled = false;}
}


var dropDM = document.createElement('SELECT');
dropDM.setAttribute('id', 'dropdown');
dropDM.setAttribute('onchange', "displayDetails()");
document.getElementById('dropmenu').appendChild(dropDM);
// var seek = document.getElementById('dropdown').value;


for (var i=0; i<rentals.types.length; i++) {
    var newSelect = document.createElement('OPTION');
    newSelect.setAttribute('value', i);
    newSelect.setAttribute('id', 'model' + i);
    newSelect.innerHTML = rentals.types[i].model;
    var labels = document.createElement('LABEL');
    document.getElementById('dropdown').appendChild(newSelect);
    document.getElementById('dropdown').appendChild(labels);
    
}
