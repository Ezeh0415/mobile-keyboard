let p = document.getElementsByTagName("p");
let i = document.getElementsByTagName("i");
let h6 = document.getElementsByTagName("h6");
let num = document.getElementById("num");
let lett = document.getElementById("lett");
let letts = document.getElementById("letts");
let sym1 = document.getElementById("sym1");
let sym2 = document.getElementById('sym2');
let audio = document.getElementById("audio");
//let upcase = document.getElementById("case")

function cafe() {
for(let i = 0; i < p.length; i++){
       p[i].classList.toggle('up')
     };
};

num.addEventListener("click", function() {
    for(let i = 0; i < p.length; i++){
       p[i].style.display = 'none';
      };
   for(let o = 0; o < i.length; o++) {
       i[o].style.display = 'block';
   }
});

lett.addEventListener("click", function() {
    for(let i = 0; i < p.length; i++){
       p[i].style.display = 'block';
      };
   for(let o = 0; o < i.length; o++) {
       i[o].style.display = 'none';
   }
   for(let h = 0; h < h6.length; h++){
       h6[h].style.display = 'none';
     };
});

letts.addEventListener("click", function() {
    for(let i = 0; i < p.length; i++){
       p[i].style.display = 'block';
      };
   for(let o = 0; o < i.length; o++) {
       i[o].style.display = 'none';
   }
   for(let h = 0; h < h6.length; h++){
       h6[h].style.display = 'none';
     };
});

sym1.addEventListener("click", function() {
    for(let o = 0; o < i.length; o++){
       i[o].style.display = 'none';
      };
   for(let h = 0; h < h6.length; h++) {
       h6[h].style.display = 'block';
   }
});

sym2.addEventListener("click", function() {
    for(let o = 0; o < i.length; o++){
       i[o].style.display = 'block';
      };
   for(let h = 0; h < h6.length; h++) {
       h6[h].style.display = 'none';
   }
});

for(let i = 0; i < p.length; i++){
       p[i].addEventListener("click", function() {
           audio.play();
       })
     };
for(let o = 0; o < i.length; o++) {
       i[o].addEventListener("click", function() {
           audio.play();
       })
   }
for(let h = 0; h < h6.length; h++){
       h6[h].addEventListener("click", function() {
           audio.play();
       })
     };