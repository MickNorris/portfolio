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





$wrap.on("click", ".page-link", function(evt){
    evt.preventDefault();
    
    
    if(window.location === this.href)
        return;
    

    var pageTitle = (this.title) ? this.title : this.textContent;
        pageTitle = (this.getAttribute("rel") === "home") ? pagetitle: pageTitle + " - Alazar Aklilu";
    
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
