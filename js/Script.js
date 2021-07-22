$(document).ready(function(){
    
    
    

    function animate(){
        
        var s = 50;
        
        $(".an1").animate({bottom:"120%"},s+200,function(){
            
            $(".an2").animate({bottom:"-120%"},s,function(){
            
                $(".an3").animate({bottom:"120%"},s,function(){

                    $(".an4").animate({bottom:"-130%"},s,function(){
            
                        $(".an5").animate({bottom:"-120%"},s,function(){
            
                            $(".an6").animate({bottom:"120%"},s,function(){
            
                                $(".an7").animate({bottom:"120%"},s,function(){
                                    
                                    $(".tan").animate({left:"100%"},s+100,function(){


                                    })
                                })
                                
                            })
                            
                        })
            
                    })
                })
                
            })
            
        })
    }
   
    function anhide(){
        $(".an").animate({bottom:"0%"},0)
        $(".tan").animate({left:"0%"},0)
    }

    
    
    animate(anhide());
    
    setInterval(function(){
        animate(anhide());
    }, 2500);
    
});


//-------------- 1 ---------------
/*
setTimeout(function(){
    document.getElementById("Loader").style.display = "none";
}, 5000);
*/




//-------------- 1 ---------------
/*
window.onload = function(){
    document.getElementById("Loader").style.display = "none";
}
*/








