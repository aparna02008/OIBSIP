function checkregister(){
    let a = document.getElementById("pass").value;
    let b = document.getElementById("cpass").value;

    if (a === "" || b === "") {
        alert("Please fill all fields");
    } 
    else if (a === b) {
        alert("Registered Successfully");
        // redirect panna next step
        window.location.href = "dashtask3.html";
    } 
    else {
        alert("Passwords do not match");
    }
}

