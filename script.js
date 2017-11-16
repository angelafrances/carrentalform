var cars = { 
  name: 'PVD Car Rentals',
  types: ['economy', 'midsize'],
  econCount: 30,
  midCount: 25,
 
};

var rentals = {
    volvo: ['11', '$64'],
    saab: ['13', '$72'],
    fiat: ['0', '$98'],
    audi: ['8', '$108'],
    
};

var renters = [
    {
        name:'Joe',
        rental:'fiat'
    },
    {
        name:'Amy', 
        rental:'audi'
    },
];   
    function addRental() {
        var inputName = document.getElementById('rentername').value;
        var inputCars = document.getElementById('rentalCars').value;
        renters.push(
             {
                 name: inputName,
                 rental: inputCars
             }
        );
        alert('success! you are booked!');
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
    
  
    
    function checkRental() {
        var rentme = document.getElementById('rentalCars').value; 
           if(rentme=="volvo") {
            document.getElementById('rentAvail').innerHTML = rentals.volvo[0];
            document.getElementById('pricePer').innerHTML = rentals.volvo[1];
            } else if(rentme=="audi") {
            document.getElementById('rentAvail').innerHTML = rentals.audi[0];
            document.getElementById('pricePer').innerHTML = rentals.audi[1];
            } else if(rentme=="fiat") {
            document.getElementById('rentAvail').innerHTML = rentals.fiat[0];
            document.getElementById('pricePer').innerHTML = rentals.fiat[1];
            } else if(rentme=="saab"){
            document.getElementById('rentAvail').innerHTML = rentals.saab[0];
            document.getElementById('pricePer').innerHTML = rentals.saab[1];
            } 
    
    }
    
    
    function checkForm() {
        var formFill = document.getElementById('rentername').value;
        var dropFill = document.getElementById('rentalCars').value;
       
        if ((formFill.length > 0) && (dropFill != 'selection')) {
            addRental();
            
        } else {
            alert('you must enter name AND select one option from dropdown menu');
            document.getElementById("submitbutton").disabled = true;
            
        }
        
    }
    
    function zeroLeft () {
        var rentme = document.getElementById('rentalCars').value; 
        if ((rentme == 'audi' && rentals.audi[0] == '0') 
        || (rentme == 'volvo' && rentals.volvo[0] == '0')
        || (rentme == 'fiat' && rentals.fiat[0] == '0')
        || (rentme == 'saab' && rentals.saab[0] == '0')) {
            alert('oops! this model is no longer available, please select another model');
        }
    }
    
    function submitOn () {
        document.getElementById('submitbutton').disabled = false;
    }
