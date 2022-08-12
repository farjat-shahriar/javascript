console.log("welcome")
const days=["sunday",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday"];
const months=["january",
"february",
"march",
"april",
"may",
"june",
"july",
"auguest",
"september",
"öctober",
"november",
"december"];



const eventtext = document.querySelector('.event_text');
const numboxs = document.querySelectorAll(".number_box h4")
const countbox = document.querySelector(".countdown_box")
const button = document.querySelectorAll(".btn");

// sale date
const eventdateobj = new Date(2021,11,23,07,25,00);
const eday = eventdateobj.getDay();
const edate = eventdateobj.getDate();
const emonth = eventdateobj.getMonth();
const eyear = eventdateobj.getFullYear();
const ehours = eventdateobj.getHours();
const emins = eventdateobj.getMinutes();


eventtext.textContent=`This Product will be available on ${days[eday]},${edate} ${months[emonth]} ${eyear} at ${ehours}.  ${emins}`

const numform=(num)=>{
  return num<10? `0${num}` : num;
}
function getcountdown(){
    const etime = eventdateobj.getTime();
    const ctime = new Date(). getTime();
    const timediff = etime - ctime;

   const onesec = 1000;
   const onemin = onesec * 60;
   const onehr = onemin* 60;
   const oneday = onehr * 24;
   const remainday = Math.floor(timediff/oneday);
   const remainhours = Math.floor((timediff%oneday)/onehr);
   const remainmin = Math.floor((timediff%onehr)/onemin);
   const remainsec = Math.floor((timediff%onemin)/onesec);
   const timevalue =[remainday, remainhours, remainmin, remainsec];
//    console.log(timevalue)
if(timediff<0){
    countbox.style.display ="none"
    eventtext.textContent='sale is live';
    button.forEach((btn)=>{
         btn.classList.remove("btn_disabled");
    })

}else{
  numboxs.forEach((box, index) =>{
       box.textContent = numform(timevalue[index]); 
   })
  
}
 
}
let countdown = setInterval(getcountdown,1000);
