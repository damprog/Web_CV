    
    
    //Używany wcześniej do pokazywania obrazka
    
    var myImgs = document.querySelectorAll('img');
   
    myImgs.forEach(item =>{
    item.addEventListener('click', function(evt){
        // creating a overlay
        var myOverlay = document.createElement('div');

        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.background = "rgba(0, 0, 0, 0.5)";
        myOverlay.style.position = "fixed";
        myOverlay.style.zIndex = 100;
        myOverlay.style.left = 0 + 'px';
        myOverlay.style.top = 0 + 'px';
        myOverlay.style.float = "left";
        
        // create img on overlay
        img = document.createElement('img');
        img.src = evt.target.src;

        // centering img
        if(window.innerHeight<=img.height){
            var k_scale = window.innerHeight/img.height;
            img.style.scale = k_scale;
        }
        if(window.innerWidth<=img.width){
            var k_scale = window.innerWidth/img.width;
            img.style.scale = k_scale;
        }
        var x = (window.innerWidth - img.width)/2;
        var y = (window.innerHeight - img.height)/2;
        img.style.left = (x) + 'px';
        img.style.top = (y) + 'px';
        
        img.style.position = "absolute";

        // adding img to overlay
        myOverlay.appendChild(img);
        // adding close



        // adding overlay to html body
        document.body.appendChild(myOverlay);
        img.addEventListener('click', function(){
            if(myOverlay){
                myOverlay.parentNode.removeChild(myOverlay);
            }
        });
    });
   });