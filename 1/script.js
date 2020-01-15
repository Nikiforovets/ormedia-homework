function openGooglePage(){
    document.location.href = "https://google.com";
}

function changePageStyle(){
    var buttons = document.querySelectorAll("button");
    for(var button of buttons){
        button.style.backgroundColor = "#40ff6d";
    }
}

function displayFlexboxMockup(){
    var body = document.querySelector("body");
    body.innerHTML = "<section id='content'></section>";

    var section = document.getElementById("content");
    for(var i = 1; i <= 5; i++){
        section.innerHTML += "<article>" + "Some interesting text " + i + "</article>";
    }
    section.style.display = "flex";

    var articles = document.querySelectorAll("article");
    for(var article of articles){
        article.style.marginRight = "30px";
        article.style.padding = "10px";
        article.style.backgroundColor = "#b340ff";
    }
}