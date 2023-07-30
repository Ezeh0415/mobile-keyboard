let p = document.getElementsByTagName("p");
let i = document.getElementsByTagName("i");
let h6 = document.getElementsByTagName("h6");
let num = document.getElementById("num");
let lett = document.getElementById("lett");
let letts = document.getElementById("letts");
let sym1 = document.getElementById("sym1");
let sym2 = document.getElementById('sym2');
let audio = document.getElementById("audio");
let input = document.getElementById("text");
//let upcase = document.getElementById("case")

function cafe() {
for(let i = 0; i < p.length; i++){
       p[i].classList.toggle('up')
     };
};

p1.addEventListener("click", function() {
  let = outset = p1.textContent;
  input.value += outset;
});

p2.addEventListener("click", function() {
  let = outset = p2.textContent;
  input.value += outset;
});

p3.addEventListener("click", function() {
  let = outset = p3.textContent;
  input.value += outset;
});

p4.addEventListener("click", function() {
  let = outset = p4.textContent;
  input.value += outset;
});

p5.addEventListener("click", function() {
  let = outset = p5.textContent;
  input.value += outset;
});

p6.addEventListener("click", function() {
  let = outset = p6.textContent;
  input.value += outset;
});

p7.addEventListener("click", function() {
  let = outset = p7.textContent;
  input.value += outset;
});

p8.addEventListener("click", function() {
  let = outset = p8.textContent;
  input.value += outset;
});

p9.addEventListener("click", function() {
  let = outset = p9.textContent;
  input.value += outset;
});

p10.addEventListener("click", function() {
  let = outset = p10.textContent;
  input.value += outset;
});

// second keys section

p11.addEventListener("click", function() {
  let = outset = p11.textContent;
  input.value += outset;
});

p12.addEventListener("click", function() {
  let = outset = p12.textContent;
  input.value += outset;
});

p13.addEventListener("click", function() {
  let = outset = p13.textContent;
  input.value += outset;
});

p14.addEventListener("click", function() {
  let = outset = p14.textContent;
  input.value += outset;
});

p15.addEventListener("click", function() {
  let = outset = p15.textContent;
  input.value += outset;
});

p16.addEventListener("click", function() {
  let = outset = p16.textContent;
  input.value += outset;
});

p17.addEventListener("click", function() {
  let = outset = p17.textContent;
  input.value += outset;
});

p18.addEventListener("click", function() {
  let = outset = p18.textContent;
  input.value += outset;
});

p19.addEventListener("click", function() {
  let = outset = p19.textContent;
  input.value += outset;
});

// third key section

p20.addEventListener("click", function() {
  let = outset = p20.textContent;
  input.value += outset;
});

p21.addEventListener("click", function() {
  let = outset = p21.textContent;
  input.value += outset;
});

p22.addEventListener("click", function() {
  let = outset = p22.textContent;
  input.value += outset;
});

p23.addEventListener("click", function() {
  let = outset = p23.textContent;
  input.value += outset;
});

p24.addEventListener("click", function() {
  let = outset = p24.textContent;
  input.value += outset;
});

p25.addEventListener("click", function() {
  let = outset = p25.textContent;
  input.value += outset;
});

p26.addEventListener("click", function() {
  let = outset = p26.textContent;
  input.value += outset;
});

p27.addEventListener("click", function() {
  let = outset = p27.textContent;
  input.value += outset;
});

// last key section

p28.addEventListener("click", function() {
  let = outset = p28.textContent;
  input.value += outset;
});

p29.addEventListener("click", function() {
  let = outset = p29.textContent;
  input.value += outset;
});

p30.addEventListener("click", function() {
  let = outset = p30.textContent;
  input.value += outset;
});

p31.addEventListener("click", function() {
  let = outset = p31.textContent;
  input.value += outset;
});

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