

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnres = document.getElementById("btnres");
const btn00 = document.getElementById("btn00");
const limpiar = document.getElementById("Limpiar");
const btnsuma = document.getElementById("btnsuma");
const btndivi = document.getElementById("btndivi");
const btnmulti = document.getElementById("btnmulti");
const btnigual = document.getElementById("btnigual");
const textbox = document.getElementById("textbox");






btn0.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+0+0

})

btn00.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+0

})

btn1.addEventListener("click",function(){
    
    a = textbox.value
    textbox.value = a+1
    
})

btn2.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+2

})

btn3.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+3

})

btn4.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+4

})


btn5.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+5

})

btn6.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+6

})

btn7.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+7

})

btn8.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+8

})

btn9.addEventListener("click",function(){
    a = textbox.value
    textbox.value = a+9

})
let primvs = 0;
let operacion;

btnsuma.addEventListener("click",function(){
    operacion = "+";
    primvs = parseInt(textbox.value);
    textbox.value = "";
});

btnres.addEventListener("click",function(){
    operacion = "-";
    primvs = parseInt(textbox.value);
    textbox.value = "";
});

btnmulti.addEventListener("click", function() {
    operacion = "*";
    primvs = parseInt(textbox.value);
    textbox.value = "";
});

btndivi.addEventListener("click", function() {
    operacion = "/";
    primvs = parseInt(textbox.value);
    textbox.value = "";
});

btnigual.addEventListener("click",function(){
    let v2s = parseInt(textbox.value);
    let resul;
    switch (operacion) {
        case "+":
            resul = primvs + v2s;
            break;
        case "-":
            resul = primvs - v2s;
            break;
        case "*":
            resul = primvs * v2s;
            break;
        case "/":
            resul = primvs / v2s;
            break;
        default:
            resul = primvs;
    }
    textbox.value = resul;
    primvs = resul;
});
limpiar.addEventListener("click",function(){
        
    let vari = textbox.value;
    textbox.value = ""
   

})






