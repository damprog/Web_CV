    var formDiv = document.getElementById('contact_form_div');
    var btnForm = document.getElementById('btnForm');

    btnForm.addEventListener('click', function(){
        if(formDiv.style.visibility == 'visible'){
            formDiv.style.visibility = 'hidden';
            formDiv.style.height = 0 + 'px';
            formDiv.style.margin = 0;
            formDiv.style.padding = 0;
            btnForm.textContent = "Formularz"
        }else{
            formDiv.style.height = 420 + 'px';
            formDiv.style.margin = 50 +'px auto';
            formDiv.style.padding = 40 + 'px';
            formDiv.style.visibility = 'visible';
            btnForm.textContent = "Ukryj formularz";
        }
    });