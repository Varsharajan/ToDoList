onLogin = () =>{
    var usrname = document.getElementById("usrname").value;
    var passwrd = document.getElementById("psswrd").value;
    //onsuccess() function passed as callback here.
    validate(usrname,passwrd,onSuccess);
}


validate = (uname,pwd,validation) => {

    if(uname == "admin" && pwd == "12345")
    
        //callback-function
        validation();
    
    else
    {
        if(uname != "admin")
            alert("Login Failed. invalid username");
        else
            alert("Login Failed.invalid password");
    }

}

//this function redirects to main page if validation is successful.
 onSuccess = () =>  document.querySelector("form").action = "./todolist.html";