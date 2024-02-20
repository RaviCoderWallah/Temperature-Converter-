let celiusInput = document.querySelector("#celsius");
let fahrenheitInput = document.querySelector("#fahrenheit");

let input = "";


celiusInput.addEventListener("input", (e) => {
    try {
        if(celiusInput.value != ""){
            input = celiusInput.value;
            let calculate = (9 / 5 * input) + 32;
            fahrenheitInput.value = calculate;
        }
        else{
            fahrenheitInput.value = "";
        }
    } catch (error) {
        alert("Enter valid !! ")
    }

});


fahrenheitInput.addEventListener("input", () => {
    try{
        if(fahrenheitInput.value != ""){
            input = fahrenheitInput.value;
            let calculate = (fahrenheitInput.value - 32) * 5 / 9;
            celiusInput.value = calculate;
        }
        else{
            celiusInput.value = "";
        }
    } catch(error){
        alert("Enter valid !! ")
    }

});

