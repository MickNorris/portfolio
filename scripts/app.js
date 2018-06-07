$wrap.on("click", ".page-link", function(evt){
    console.log("yike");
    evt.preventDefault();
    
    
    if(window.location === this.href)
        return;
    

    var pageTitle = (this.title) ? this.title : this.textContent;
        pageTitle = (this.getAttribute("rel") === "home") ? pagetitle: pageTitle + " - Alazar Aklilu";
    
    History.pushState(null,pageTitle,this.href);
    
});



History.Adapter.bind(window, "statechange",function(){
    console.log("yike");
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
