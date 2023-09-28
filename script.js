function validate() {
    var username = document.getElementById("username").value;
    var place = document.getElementById("place").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    if (username === "") {
        alert("Username is required");
        document.getElementById("username").focus();
        return false;
    }

    if (place === "") {
        alert("Place is required");
        document.getElementById("place").focus();
        return false;
    }

    if (email === "") {
        alert("Email is required");
        document.getElementById("email").focus();
        return false;
    }

    if (number === "") {
        alert("Number is required");
        document.getElementById("number").focus();
        return false;
    }

    return true;
}
