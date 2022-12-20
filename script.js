
function validate() {    
    var fname = document.forms.fname;    
    var lname = document.forms.lname;    
    var address = document.forms.address;    
    var gender = document.forms.gender;    
    var email = document.forms.email;    
    var password = document.forms.password;    
    var mobile = document.forms.mobile;    
    var course = document.forms.course;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    


    var emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if(email.match(emails)){
        alert("valid email address!");
        return false;
        }else{
        alert("you have entered an invalid email address")
        return false;
    }
    
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.value.length <= 0) {    
        alert("password is required");    
        password.focus();    
        return false;    
    }  
    if(password.match(passw)){
        alert("password is strength");
        return false;
        }else{
        alert("wrong password")
        return false;
    }
    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (course.value == "select course") {    
        alert("Course is required");    
        course.focus();    
        return false;    
    }    
    

    alert("form submitted")

    return false;    

}



  
