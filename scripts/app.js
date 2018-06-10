var $wrap = $("#wrap");


/*if(logos === undefined)
    var logos = document.getElementsByClassName("logo-wrapper");
if(fullscreenLogo === undefined)
    var fullscreenLogo = document.getElementsByClassName("fullscreen-logo")[0];


$(".logo-wrapper").on('click',function(){
    console.log("okay");
});


fullscreenLogo.addEventListener("click",function(e){
    e.target.classList.remove("visible");
});

for(var i = 0; i < logos.length; i++){
    
    logos[i].addEventListener('click',logoClicked);
}


function logoClicked(e){
    fullscreenLogo.classList.add("visible");
    fullscreenLogo.children[0].src = e.target.src;
}

*/
$wrap.on("click",".logo-wrapper",function(evt){
    $(".fullscreen-logo")[0].classList.add("visible");
    $(".fullscreen-logo")[0].children[0].src = evt.currentTarget.children[0].src;
});

$wrap.on("click",".fullscreen-logo",function(evt){
    evt.currentTarget.classList.remove("visible");
});

$wrap.on("click", ".page-link", function(evt){
    evt.preventDefault();
    
    if(window.location === this.href)
        return;
    

    var pageTitle = "nick morris";
    
    History.pushState(null,pageTitle,this.href);
    
});



History.Adapter.bind(window, "statechange",function(){
    var state = History.getState();
    $.get(state.url,function(res){
        $.each($(res), function(index,elem){
            if($wrap.selector !== "#" + elem.id){
                return;
            }
            $wrap.html($(elem).html());
        })
        
    })
});
