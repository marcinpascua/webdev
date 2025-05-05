function getInfo()
{
    //GET VALUES
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let num = document.getElementById("num");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let mop = document.querySelector('input[name="mode"]:checked');
    let order = document.querySelector(".order textarea");

    //STORE DATA TO THE LOCAL STORAGE
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("num", num.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("mop", mop.value);
    localStorage.setItem("order", order.value);
}

function clearStorage() {
	localStorage.clear();
}

function displayInfo()
{
    //DISPLAY INFO ON CONFIRM.HTML
    document.getElementById("confirmFname").innerHTML += localStorage.getItem("fname");
    document.getElementById("confirmLname").innerHTML += localStorage.getItem("lname");
    document.getElementById("confirmNum").innerHTML += localStorage.getItem("num");
    document.getElementById("confirmEmail").innerHTML += localStorage.getItem("email");
    document.getElementById("confirmAddress").innerHTML += localStorage.getItem("address");
    document.getElementById("confirmPayment").innerHTML = localStorage.getItem("mop");
    document.getElementById("confirmOrder").innerHTML += localStorage.getItem("order");
}