var imgs = document.querySelectorAll('img');
var container = document.getElementById("container");
var slider = document.getElementById("slider");
var i = 1;

var slides = document.getElementsByClassName("mySlides");
var slideIndex = 2;

// Tworzy strukturę slajdów ze zdjęciami
function createStructure(){

    imgs.forEach(item => {
        if(i>1){
        var slide = document.createElement('div');
        slide.className = "mySlides";
        slide.style.textAlign = "center";
        slide.id=i;
        var numtext = document.createElement('div');
        numtext.className = "numbertext";
        var numberAll = parseInt(imgs.length-1);
        var numberOf = parseInt(i-1);
        numtext.textContent = numberOf + ' / ' + numberAll;
        var image = document.createElement('img');
        image.src=item.src;
        image.id = i;
        image.style.maxWidth=60 + "%";
        image.style.maxHeight= 55 + "%";
        slide.appendChild(numtext);
        slide.appendChild(image);
        container.appendChild(slide);

        item.id=i;
        }
        i++;
    });
}

// Przejście za pomocą przycisków
function plusSlides(n) {
    slider.style.visibility="hidden";
    slideIndex = parseInt(slideIndex) + parseInt(n);
    // Do testowania
    // console.log(slideIndex);
    showSlides(slideIndex);
    slider.style.visibility="visible";
}

// Ustawia index z obrazka 
function currentSlide(n) {
    slideIndex = parseInt(n)
    // Do testowania
    // console.log("Id podane do showSlides(): "+slideIndex);
    showSlides(slideIndex);
}

// Pokazuje slajdy ze zdjęciami
function showSlides(n) {
    var j;
    if(n > parseInt(slides.length+1)) {slideIndex = 2;}
    else if(n < 2) {slideIndex = parseInt(slides.length + 1);}
    else{slideIndex=n;}

    //Do testowania
    // console.log("liczba slide: " + slides.length)

    for(j = 0; j <= (slides.length-1); j++){
        slides[j].style.display = "none";
        // Do testowania
        // console.log("FOR:element w tablicy - j: " + j);
        if(slides[j].id == (slideIndex)){
            // Do testowania
            // console.log("slides[j].id:" + slides[j].id);
            // console.log("IF:element w tablicy - j: " + j);
            // console.log("slideindex:" + slideIndex);
            slides[j].style.display = "block";
        }
    }

    
    //Poprawia rozmiar wyświetlanych zdjęć
    var slideIdx = parseInt(slideIndex-1);
    if(window.innerHeight <= imgs[slideIdx].height){
        var k_scale = 8*10/window.innerHeight/imgs[slideIdx].height;
        imgs[slideIdx].style.scale = k_scale;
    }else if(window.innerWidth <= imgs[slideIdx].width){
        var k_scale = 8*10/window.innerWidth/imgs[slideIdx].width;
        imgs[slideIdx].style.scale = k_scale;
    }
    let x = (window.innerWidth - imgs[slideIdx].width)/2;
    let y = (window.innerHeight - imgs[slideIdx].height)/2;
    imgs[slideIdx].style.left = (x) + 'px';
    container.style.top = (y)/4 + 'px';
    
}

//Do wyłączania przeglądu galerii
function quitSlides(){ 
    slider.style.visibility="hidden";
    //Jak narazie zbędne
    // slides.forEach(item=>{
    //     item.style.display="none";
    // });
}

//Do EventListenera na kliknięcie obrazka
function show(item){
    // Do testowania
    // console.log(item);
    currentSlide(item);
    slider.style.visibility = "visible";
}

//Event listener dla każdego obrazka - 
//  nasłuchuje kliknięcia na obrazek
imgs.forEach(item=> item.addEventListener('click', ()=>{
    if(item.id>0){
    show(item.id);}
  })
);

// Budowa strutury
createStructure();