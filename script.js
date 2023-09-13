
function clock()
{
    let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let ampm = h >= 12 ? 'PM' : 'AM';
    if (h > 12) {
        h -= 12;
    }
let time=`${h}:${m}:${s} ${ampm}` ;
const d1=document.getElementById("div1");
d1.textContent=time;
}

clock();
setInterval(clock,1000);