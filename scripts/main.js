let content = document.getElementsByClassName("logo-wrapper");
let fullscreenLogo = document.getElementsByClassName("fullscreen-logo")[0];
var $wrap = $("#wrap");


fullscreenLogo.addEventListener("click",function(e){
    e.target.classList.remove("visible");
});

for(var i = 0; i < content.length; i++){
    content[i].addEventListener('click',function(e){
        fullscreenLogo.classList.add("visible");
        fullscreenLogo.children[0].src = e.target.src;
    });
}





