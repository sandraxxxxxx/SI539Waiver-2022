
  //原生js实现
var fg = document.getElementsByTagName('figure');
var fgl= fg.length
for(var i=0; i<fgl; i++){
    fg[i].className = "one-third";
}


var ft = document.getElementsByTagName('footer')[0];

ft.addEventListener('click', () => {
  ft.style.display = 'none';
});


var five = document.getElementsByTagName('figure')[4];

five.addEventListener('dblclick', () => {
  five.style.visibility = "hidden";
});

var first = document.getElementsByTagName('figure')[0];
first.addEventListener("mouseover", (event) => {
    event.target.style.fontFamily = "Cursive";
    
}, false);

first.addEventListener("mouseout", (event) => {
    event.target.style.fontFamily = "Times";
    
}, false);

var fst= first.getElementsByTagName('figcaption')[0];
fst.tabIndex = "0";
fst.addEventListener("focusin", (event) => {
    event.target.style.fontFamily = "Cursive";
    
}, false);

fst.addEventListener("focusout", (event) => {
    event.target.style.fontFamily = "Times";
    
}, false);
