import * as dat from './dat.gui.module.js';
import * as THREE from './three.min.js'
// import { OrbitControls } from './OrbitControls.js';

 function print(printin,addstylename,addclassname,typeElement,putidlement) {
    // Create element:
  
    const para = document.createElement(typeElement);
    para.innerHTML = `${printin}`;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${addstylename}`)

    para.classList.add(addclassname)
   
    // Append to another element:
    document.querySelector(putidlement).appendChild(para);
    
    
} 
function Draw(printin,addstylename,addclassname,typeElement,putidlement) {
    // Create element:

    const para = document.createElement(typeElement);
    para.innerHTML = printin;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${addstylename}`)

    para.classList.add(`${addclassname}`)
   
    // Append to another element:
    document.querySelector(putidlement).appendChild(para);
    
    
} 
 var r = document;
 var onclick = document;
 var fun = function() {

};
 function printout (ele){
    console.log(ele)
}
 function printin (ele){
    printout(ele)
    console.log("comming soon")
}

function routerdom(Routername,ok) {
    var counter = 0
    counter++
    print(Routername,`Router-Dom${counter}`,`Router-Dom${counter}`,"div",ok)
    
    document.getElementById("Router-Dom1").style.top = "0px"
    setTimeout(function () {
        document.getElementById("Router-Dom1").style.top = "-500px"
    },1500)
    document.getElementById("Router-Dom1").innerHTML = Routername
    if (Routername === "undefined") {
        Routername = ""
    }
    
}

 function AlarmSet(holj) {
  print(`<div class="wrapper">
  <img id="dfsf" src="./clock.svg" alt="clock">
  <h1 id="dsffd">00:00:00 PM</h1>
  <div class="content">
    <div class="column">
      <select id="dsff">
        <option id="dfsc" value="Hour" selected disabled hidden>Hour</option>
      </select>
    </div>
    <div id="sdf" class="column">
      <select id="kolo">
        <option id="dfdfs" value="Minute" selected disabled hidden>Minute</option>
      </select>
    </div>
    <div id="lopkd" class="column">
      <select id="polim">
        <option id="kold" value="AM/PM" selected disabled hidden>AM/PM</option>
      </select>
    </div>
  </div>
  <button id="basicone">Set Alarm</button>
</div>`,"ok","jk","div",holj)
 
const currentTime = document.getElementById("dsffd"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("#basicone");

let alarmTime, isAlarmSet,
ringtone = new Audio("./ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);
 

}

function RemoveAllPrintstags() {
    setTimeout(function () {
        document.querySelector("#ACOMpuTWebTecloter").style.display = "none"
    },2000)
}
function RemoveAllPrintstagsFixed() {
    setTimeout(function () {
        document.querySelector("#ACOMpuTWebTecloter").style.display = "none"
    },1000)
}
function RemoveAllPrintstagsFixedAll() {
    setTimeout(function () {
        document.querySelector("#ACOMpuTWebTecloter").style.display = "none"
    },500)
}
function RemoveAllPrintstagsFixedAllStrings() {
    setTimeout(function () {
        document.querySelector("#ACOMpuTWebTecloter").style.display = "none"
    },100)
}
function addbrtag(place) {
    const para = document.createElement("br");
    para.innerHTML = "";
    // Append to another element:
    document.querySelector(place).appendChild(para);
}
var onClick = document;
var Auto = document;
var $r = document;
var r = document;
//basic
function DrawCanvas(a,b,c) {
    const para = document.createElement("canvas");
    para.innerHTML = printin;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${a}`)
    para.classList.add(`${b}`)
    // Append to another element:
    document.querySelector(c).appendChild(para);
}
var color = ""
function Rect(a,b,c,d,id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");

    context.rect(a, b, c, d); 
    context.fillStyle = color;
    context.fill();
 
    
}
function fillStyle(Fillcolor) {
    color = Fillcolor;
    console.log(color)
}

var color2 = ""
function drawline(x,y,a,b,j) {
    var canvas = document.getElementById(j);
    var context = canvas.getContext("2d");
    context.moveTo(x, y);
    context.lineTo(a, b);
    context.strokeStyle = color2
    context.stroke(); 
}

function strokeStyle(color2d) {
    color2 = color2d;
    console.log(color2d)
}

function TickScound(run,time) {
    setInterval(run,time);
}
function ReadElementGET(get,ids,classs) {
    const para2 = document.createElement("div");
    para2.innerHTML = get;
    var Couter = 0;
    Couter++
    para2.setAttribute("id",`${ids}`)

    para2.classList.add(`${classs}`)
   
    // Append to another element:
    document.querySelector("#based").appendChild(para2);
    
}
function PutScript(scriptsrrc) {
    
    const para3 = document.createElement("script");
    para3.src = scriptsrrc;
    para3.crossorigin = "anonymous"
    // Append to another element:
    document.body.appendChild(para3);
}
function Putlink(linksrrc) {
    
    const para3 = document.createElement("link");
    para3.href = linksrrc;
    para3.rel = "stylesheet";
    para3.crossorigin = "anonymous"
    // Append to another element:
    document.head.appendChild(para3);
}


function GetNotification(notification,ok,icons) {
  
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
        new Notification(notification,{
            body:ok,
            icon: icons
        })
    }
    })
}



//if else condtion cookiskol


// function $Cif(cif,cifdo) {
//     cif = false
//     if (cif === true) {
//         if (cif) {
//             cifdo
            
//         }
//     }
    
    
// }

var DateGet = ""
function DataBase(a) {
    var counter = 0
    counter++
    var array = a
    DateGet = array
    localStorage.setItem(`Data${counter}`,DateGet)
    var DataArrayGet = DateGet
    localStorage.getItem(DataArrayGet)
    a.join(" * ");
    
}
function terminal(a) {
    
    print(a,"terminalid","terminalclass","div","#ACOMpuTWebTecloter")
   
}
function window(a,b,c,d) {
    print(a,b,c,"div",d)
}
var ScaleDivDraggable = `<div class="popup-header">Click here to move</div>
<p>Move</p>
<p>this</p>
<p>DIV</p>`
 
function x(a,b,c) {
    var x = a
   
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.left = x + "px"

}
function Highx(a,b,c) {
    var x = a
   
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.left = x + "pc"

}

function HighxNoResolition(a,n,b,c) {
    var x = a
  
    
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.left = x + n

}
    
function y(a,b,c) {
    var x = a
   
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.top = x + "px"

}
function Highy(a,b,c) {
    var x = a
   
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.top = x + "pc"

}

function HighyNoResolition(a,n,b,c) {
    var x = a
    
    
    var ok = document.querySelector(b)
    ok.style.position = c
    ok.style.top = x + n

}
var array = [],
    sum = 0;
for (var i = 1; i <= 10000; i++) {
    array[i-1] = i;
    sum += i;
}
console.log(array)
function UpdateKol(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array) {
    a
    b
    c
    d
    e
    f
    g
    h
    i
    j
    k
    l
    m
    n
    o
    p
    q
    r
    s
    t
    u
    v
    w
    x
    y
    z
    array
}

var basic = ["idbasic","idclass","p","#ACOMpuTWebTecloter"]
function $Text(a,b,c) {  
    a.getElementById(b).innerHTML = c
}
function $Onclick(a,b,c) {  
    a.getElementById(b).onclick = c
}
function Swait(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array) {
    if (a === b) {
        c
        d
        e
        f
        g
        h
        i
        j
        k
        l
        m
        n
        o
        p
        q
        r
        s
        t
        u
        v
        w
        x
        y
        z
        array
    }else{
        c =  "//This number that right here erorr becouse have more than 1 and console.erorr(value)"+" "+1
        d = 2
        e = 3
        f = 4
        g = 5
        h = 6
        i = 7
        j = 8
        k = 9
        l = 10
        m = 11
        n = 12
        o = 13
        p = 14
        q = 15
        r = 16
        s = 17
        t = 18
        u = 19
        v = 20
        w = 21
        x = 22
        y = 23
        z = 24
        array = 1 + "-" + 10000
        console.error("Erorr 1387.444" +" "+c+" "+d+" "+e+" "+f+" "+g+" "+h+" "+i+" "+j+" "+k+" "+l+" "+m+" "+n+" "+o+" "+p+" "+q+" "+r+" "+s+" "+t+" "+u+" "+v+" "+" "+w+" "+x+" "+y+" "+z+" "+array)
        RemoveAllPrintstagsFixedAllStrings()
        
    }
}
function Cfun(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array) {
    function ope() {
        a
        b
        c
        d
        e
        f
        g
        h
        i
        j
        k
        l
        m
        n
        o
        p
        q
        r
        s
        t
        u
        v
        w
        x
        y
        z
        array   
    }
    ope()
}
function text(a) {
    return a;
}
// The Debbger Running hestory
function Multiplication(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array) {
        a = 0
        b = 0
        c = 0
        d = 0
        e = 0
        f = 0
        g = 0
        h = 0
        i = 0
        j = 0
        k = 0
        l = 0
        m = 0
        n = 0
        o = 0
        p = 0
        q = 0
        r = 0
        s = 0
        t = 0
        u = 0
        v = 0
        w = 0
        x = 0
        y = 0
        z = 0
        array  = 0  
        return a === 0.000001 / b === 0.000001 / c=== 0.000001  / d=== 0.000001 / e=== 0.000001  / f=== 0.000001  / g=== 0.000001 / h=== 0.000001  / i=== 0.000001  / j=== 0.000001  / k=== 0.000001 / l === 0.000001  / m=== 0.000001  / n=== 0.000001  / o=== 0.000001  /p=== 0.000001  /q=== 0.000001  /r === 0.000001 / s=== 0.000001  / t=== 0.000001  / u === 0.000001 / v=== 0.000001  / w=== 0.000001  / x=== 0.000001  / y=== 0.000001  / z=== 0.000001  / array=== 0.000001 ;   
}
function MultiplicationChange(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array) {
        a = a / a + a + a + a + a + a - 1
        b = b+ 18
        c = c+ 18
        d = d+ 18
        e = e+ 18
        f = f+ 18
        g = g+ 18
        h = h+ 18
        i = i+ 18
        j = j+ 18
        k = k+ 18
        l = l+ 18
        m = m+ 18
        n = n+ 18
        o = o+ 18
        p = p+ 18
        q = q+ 18
        r = r+ 18
        s = s+ 18
        t = t+ 18
        u = u+ 18
        v = v+ 18
        w = w+ 18
        x = x+ 18
        y = y+ 18
        z = z+ 18
        array  = array+ 18
        a / b / c / d / e / f / g / h / i / j / k / l / m / n / o / p / q / r / s / t / u / v / w / x / y / z / array
    Multiplication(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array)
    DataBase([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,array])
}

function Add(nummbers) {
    let sum = 0;

    for (const n of nummbers) {
        sum += n
    }
    return sum;
}

function echo(a) {
     // Create element:
  
     const para = document.createElement("Echo");
     para.innerHTML = `
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
     </head>
     <body>
       <Echo>${a}</Echo>
     </body>
     </html>`;
  
    
     // Append to another element:
     document.querySelector("#APTW").appendChild(para);
}

export{    
    print,
    printout, 
    printin,
    AlarmSet,
    routerdom,
    addbrtag,
    onClick,
    DrawCanvas,
    Rect,
    fillStyle,
    Draw,
    drawline,
    strokeStyle,
    TickScound,
    RemoveAllPrintstags,
    RemoveAllPrintstagsFixed,
    RemoveAllPrintstagsFixedAll,
    RemoveAllPrintstagsFixedAllStrings,
    ReadElementGET,
    PutScript,
    Putlink,
    GetNotification,
    DataBase,
    terminal,
    $r,
    window,
    basic,
    ScaleDivDraggable,
    x,
    Highx,
    HighxNoResolition,
    y,
    Highy,
    HighyNoResolition,
    UpdateKol,
    $Text,
    $Onclick,
    Auto,
    Swait,
    Cfun,
    text,
    Multiplication,
    MultiplicationChange,
    Add,
    echo
};