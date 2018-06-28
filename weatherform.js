function validateFirstName() 
{
    var x =document.forms["weatherForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

}

function validateLastName() {
    var x = document.forms["weatherForm"]["lastname"].value;
    var y = x.charAt(0);
    var z = /[A-Z]/
    if (y.search(z) == '0') {
        return true;
    }
        else { 
            alert ("First Letter of Last Name must be capitalized");
            return false;
        }

}

function validateZipCode() {
    var zipCode = document.forms["weatherForm"]["zipcode"].value;
    console.log(zipCode);
    var regex = /[A-Z||a-z]/;
    console.log(zipCode.search(regex));
    if (zipCode.search(regex) >= 0) {
        alert("You must enter only numbers for Zip Code");
        return false;
    }
    return true;

}

function validatePhoneNumber() {
    var phone = document.forms["weatherForm"]["telephoneNumber"].value;
    var regex = /[A-Z||a-z]/
    console.log(phone.search(regex));
    if (phone.search(regex) >= 0) {
        alert("You must enter only numbers for Phone Number");
        return false;
    }
    return true;
}

function validateForm(){
    validateFirstName()
    validateLastName()
    validateZipCode()
    validatePhoneNumber()
}