let content = document.getElementsByClassName("content");
let fullscreen = document.getElementsByClassName("fullscreen")[0];

fullscreen.addEventListener("click",function(e){
    e.target.classList.remove("visible");
});

for(var i = 0; i < content.length; i++){
    content[i].addEventListener('click',function(e){
        fullscreen.classList.add("visible");
        fullscreen.children[0].src = e.target.src;
    });
}