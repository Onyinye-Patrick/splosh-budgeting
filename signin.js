var emaill, phone, pass, cpass;

function subalert() {
    emaill = document.getElementById("e-mail").value;
    phone = document.getElementById("tel").value;
    pass = document.getElementById("password").value;
    cpass = document.getElementById("cpassword").value;
    if (emaill == "" || phone == "" || pass == "" || cpass == "") {
        alert("No inputted values")
    } else {
        alert("Submitted to the database")
    }
}

function passcheck() {
    var pass, cpass;
    pass = document.getElementById("password").value
    cpass = document.getElementById("cpassword").value
    if (cpass != pass && pass != cpass) {
        alert("Check password again");
    }
}