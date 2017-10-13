//Set variables based on the HTML element id's
let un = document.querySelector('#un')
let pwd1 = document.querySelector('#pwd1')
let pwd2 = document.querySelector('#pwd2')
let PrintNameWithParamBtn = document.querySelector('#PrintNameWithParam');


//////FUNCTIONS!!/////

//Void - Only Does Something
let validateUsername = () =>{
    let userInput = document.getElementById("un").userInput.value

    
        if(userInput.length >= 8)
        {
            userInput.innerHTML = alert("Username is set")
        }
        else {
            alert("Your username should be at least 8 characters long")

            title.innerHTML = `Hello my name is ${name}`
        }

        
    //Print any string variable appended to a pre set string    
    let Greeting = (name) => {
    /* 
        Append Variable to a string and return that string, 
        nothing is printed to the screen
    */
    return `Hello my name is ${name}`
    }


    
//function to check username and password
function validatePassword(){
var invalid = "";
    function check(form)
    {
        if(form.pwd.value == form.cpwd.value)
        {
            alert("Would you like to save your password")
        }
        else {
            alert("Please enter password")
        }
    }


//Assign Event Listeners to Buttons
}
submit.addEventListener('click', (e) => {form.innerHTML = validateUsername(un.value, ); e.preventDefault()})
PrintNameWithParamBtn.addEventListener('click', () => {PrintNameWithParam(contentField.value)})
}
