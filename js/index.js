var sun = document.getElementById('sun-display');
var moon = document.getElementById('moon-display');
var navbar = document.getElementsByClassName('navbar');
var global = document.getElementById('global');
var body = document.querySelector('body')
var color = document.getElementById('color-display');
var colorMenu = document.getElementById('color-display-menu');
var textShadoww = document.getElementsByClassName("vazy_text");
var i=0;
var root = document.querySelector(":root");
var core = [document.getElementById('core1'),document.getElementById('core2'),document.getElementById('core3'),document.getElementById('core4')];

sun.onclick = function(){
    sun.style.display = "none";
    moon.style.display = "block";
    navbar[0].style.background = "#636E72";
    body.style.background = "#2D3436";
    body.style.color = "#CED6E0";
    colorMenu.style.background = "#CED6E0"
    textShadoww[0].style.textShadow = "0 0 10px #dff9fb,0 0 20px #dff9fb,0 0 40px #dff9fb,0 0 80px #dff9fb,0 0 120px #dff9fb"
    root.style.setProperty('--core_change2', rs.getPropertyValue('--core6'));
    root.style.setProperty('--core_change3', rs.getPropertyValue('--core5'));
    
}
moon.onclick = function(){
    sun.style.display = "block";
    moon.style.display = "none";
    navbar[0].style.background = "#CED6E0";
    body.style.background = "#DFE4EA"; 
    body.style.color = "#2F3542"; 
    colorMenu.style.background = "#2F3542" ;
    textShadoww[0].style.textShadow = "0 0 10px #2F3542,0 0 20px #2F3542,0 0 40px #2F3542,0 0 80px #2F3542,0 0 120px #2F3542";
    root.style.setProperty('--core_change2', rs.getPropertyValue('--core5'));
    root.style.setProperty('--core_change3', rs.getPropertyValue('--core6'));
}
color.onclick = function(){
    if(i==0){
        colorMenu.style.display = "block";
        i=1;
    }else if(i==1){
        colorMenu.style.display = "none";
        i=0;
    }
}
var rs = getComputedStyle(root);
core[0].onclick = function(){
    root.style.setProperty('--core_change1', rs.getPropertyValue('--core1'));
}
core[1].onclick = function(){
    root.style.setProperty('--core_change1', rs.getPropertyValue('--core2'));
}
core[2].onclick = function(){
    root.style.setProperty('--core_change1', rs.getPropertyValue('--core3'));
}
core[3].onclick = function(){
    root.style.setProperty('--core_change1', rs.getPropertyValue('--core4'));
}
var text = document.getElementsByClassName("second-text");
function textLoad(){
    setTimeout(() => {
        text[0].textContent = "Web Developer";
    },0);
    setTimeout(() => {
        text[0].textContent = "Web Designer";
    },3000);
    setTimeout(() => {
        text[0].textContent = "Vazy-sama";
    },6000);
    setTimeout(() => {
        text[0].textContent = "Handsome";
    },9000);
}
textLoad();
setInterval(textLoad, 12000);