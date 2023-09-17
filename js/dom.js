function clickbtn() {
    var name = document.getElementById("name").value;
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    document.getElementById("uname").innerText = name;
    document.getElementById("uname1").innerText = name1;
    document.getElementById("uname2").innerText = name2;
}

// clickbtn(); function calling