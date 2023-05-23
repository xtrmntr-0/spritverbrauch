"use strict"

window.addEventListener("load", function(){



    let button = document.getElementById("berechne");
    button.addEventListener("click", function(){
        let kilometer = document.getElementById("kilometer");
        let liter = document.getElementById("liter");
       
    
        let dverbrauch = ((liter.value * 100) / kilometer.value);

       document.getElementById("durchschnittsverbrauch").value = dverbrauch.toFixed(2);
        
        
        
        
    });

});




