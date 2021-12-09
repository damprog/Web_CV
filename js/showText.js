var listOfLi = document.querySelectorAll('li');
var listOfP = document.querySelectorAll('.p_text');

listOfLi.forEach(li =>{
    li.addEventListener('click', function(){
        var id = li.id;
        listOfP.forEach(p => {
            var p_id = id+'_'+id;
            if(p.id == p_id){
                var li_el = document.getElementById(id);
                var p_el = document.getElementById(p_id);
                if(p_el.style.visibility == 'visible'){
                    p_el.style.visibility = 'hidden';
                    p_el.style.height = 0;
                }else{
                    p_el.style.visibility = 'visible';
                    p_el.style.height = 'fit-content';
                }
            }
        });
    });
});


