// Challenge 1
function myfunction(){
    var x=document.getElementById("birthdate").value;
    var y=document.getElementById("todaydate").value;
    const bdate=x.split("-");
    const tdate=y.split("-");
    console.log(bdate);
    console.log(tdate);
    var dayz=0;
    if(x=='' || y==''){
        return;
    }
    if(defaultresult(bdate,tdate))
    {
        displayresult(dayz);
        return;
    }
    if(bdate[0]==tdate[0])
    {
        dayz+=oneyeardays(tdate,bdate);
        displayresult(dayz);
        return;
    }
    dayz+=parseInt(noOfDays(bdate[0],bdate[1]))-parseInt(bdate[2]);
    dayz+=parseInt(lastyeardays(tdate[0],tdate[1],tdate[2]));
    for(let yr=parseInt(bdate[0])+1;yr<=parseInt(tdate[0])-1;yr++){
        dayz+=parseInt(noOfDays(yr,01));
    }
    displayresult(dayz);
    return;
}
function defaultresult(bdate,tdate){
    if(bdate[0]>tdate[0]){
       return true;
    }   
    else if(bdate[0]==tdate[0] && bdate[1]>tdate[1]){
        return true;
    }
    else if(bdate[1]==tdate[1] && bdate[2]>tdate[2]){
        return true;
    }
    else{
        return false;
    }
          
}
function displayresult(dayz){
    var h2=document.createElement("h2");
    if(dayz!=0)
    {
        var text=document.createTextNode("You are "+dayz+" days old.");
    }
    else
    {
        var text=document.createTextNode("Wrong Input!");
    }
    h2.setAttribute("id","daysold");
    h2.appendChild(text);
    var d=document.getElementById("result");
    d.appendChild(h2);
}
function dayscount(m,yr){
    let days=0;
    if(m===01||m==03||m==05||m==07||m==08||m==10||m==12){
        days+=31;
     } 
    else if(m==02){
        if(leapyear(yr))
        {
                days+=29;
        }
        else{
                days+=28;         
        }
    }
    else{
            days+=30;
    }
    return days+1;
}
function oneyeardays(tdate,bdate){
    let days=0;
    if(bdate[1]==tdate[1])
    {
        days+=tdate[2]-bdate[2]+1;
        return days;
    }
    for(m=parseInt(bdate[1])+1;m<=parseInt(tdate[1])-1;m++)
    {
        days+=parseInt(dayscount(m,bdate[0]));
    }
    days+=parseInt(dayscount(bdate[1]))-parseInt(bdate[2]);
    days+=parseInt(tdate[2]);
    return days;
}
function lastyeardays(yr,mn,dt){
    let m=01;
    let days=0;
    while(m<mn){
       days+=dayscount(m,yr);
        m++;
    }
    days+=parseInt(dt);
    return days;    
}
function noOfDays(yr,mn){
    var days=0;
    while(mn<=12){
       days+=dayscount(mn,yr);
       mn++;
    }
    return days;
}
function leapyear(date){
    if((date%100==0 && date%400==0) || date%4==0)
    {
        return true;
    }
    else
        return false;
}
function reset(){
    let h=document.getElementById("result");
    h.remove();
    let d=document.createElement("div");
    d.setAttribute("id","result");
    let c=document.getElementById("container1");
    c.appendChild(d);
    document.getElementById("birthdate").value='';
    document.getElementById("todaydate").value='';
}
// Challenge 2
var x=0;
function generatecat(){
    x=x+1;
    let i=document.createElement("img");
    i.setAttribute("id","img-cat");
    i.src="https://robohash.org/"+x+".png/set_set4?size=150x150";
    let d=document.getElementById("imgs");
    d.appendChild(i);
}
function clearcats(){
    document.getElementById("imgs").remove();
    let d=document.createElement("div");
    d.setAttribute("id","imgs");
    let ele=document.getElementById("container2");
    ele.appendChild(d);
}
// Challenge 3
function rpsgame(event){
    removeprev();
    var user=parseInt(event.target.id);
    var comp=parseInt(Math.floor(Math.random()*3)+1);
    var re=document.getElementById("result3");
    var dis1=document.createElement("p");
    dis1.innerText="You"+took(user);
    re.appendChild(dis1);
    var dis2=document.createElement("p");
    var txt2=document.createTextNode("Computer"+took(comp));
    dis2.appendChild(txt2);
    re.appendChild(dis2);
    if(user===comp){
        var res=document.createElement("p");
        var txt=document.createTextNode("It is a tie! 🤔");
        res.appendChild(txt);
        re.appendChild(res);
    }
    else if((user==1 && comp==2) || (user==2 && comp==3) || (user==3 && comp==1))
    {
        var res=document.createElement("p");
        var txt=document.createTextNode("Computer Wins! 😔");
        res.appendChild(txt);
        re.appendChild(res);
    }
    else{
        var res=document.createElement("p");
        var txt=document.createTextNode("You Win! 😃");
        res.appendChild(txt);
        re.appendChild(res);
    }
    
}
function took(x){
    if(x==1)
    {
        return " took Rock";
    }
    else if(x==2)
    {
        return " took Paper";
    }
    return " took Scissor";

}
function removeprev(){
    document.getElementById("result3").remove();
    var x=document.getElementById("container3");
    var d=document.createElement("div");
    d.setAttribute("id","result3");
    x.appendChild(d);
}

//Challenge 4
var all_btns=document.getElementsByTagName("button");
var colour_btn_db=[];
for(let x=0;x<all_btns.length;x++){
   colour_btn_db[x]=all_btns[x].classList[1];
}
function colourchange(eventhis){
     if(eventhis.value === 'red'){
         btnRed();
     }
    else if(eventhis.value === 'yellow'){
         btnYellow();
     }
    else if(eventhis.value === 'black'){
        btnBlack();
    }
    else if(eventhis.value === 'green'){
        btnGreen();
    }
    else if(eventhis.value === 'random'){
        btnRandom();
    }
    else{
        btnOriginal();
    }

}
function btnRed(){
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add('btn-outline-danger');
    }
}
function btnYellow(){
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add('btn-outline-warning');
    }
}
function btnBlack(){
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add('btn-outline-dark');
    }
}
function btnGreen(){
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add('btn-outline-success');
    }
}
function btnRandom(){
    var colours=['btn-outline-primary','btn-outline-secondary','btn-outline-success','btn-outline-danger',
    'btn-outline-warning','btn-outline-info','btn-outline-dark'];
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add(colours[Math.floor(Math.random()*6)]);
    }
}
function btnOriginal(){
    for(let x=0;x<all_btns.length;x++){
        all_btns[x].classList.remove(all_btns[x].classList[1]);
        all_btns[x].classList.add(colour_btn_db[x]);
    }
}
// challenge 5
let blackjackGame={
    'you':{ 
        'scorespan':'#your-point',
        'div':'#your-box',
        'score':0,
    },
    'dealer':{
        'scorespan':'#dealer-point',
        'div':'#dealer-box',
        'score':0,

    },
    'cards':['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    'wins':0,
    'loss':0,
    'draw':0,
    'istand':false,
    'turnsover':false,
    'ishit':false,
};
const YOU=blackjackGame['you'];
const DEALER=blackjackGame['dealer'];
const hitsound=new Audio('./assets/sounds/swish.m4a')
const winsound=new Audio('./assets/sounds/cash.mp3')
const lossound=new Audio('./assets/sounds/aww.mp3')
function randomcard(){
    let x=Math.floor(Math.random()*13);
    return blackjackGame['cards'][x];
}
function showCard(activePlayer,card){
  if(activePlayer['score']<=21){  
        let cardImg=document.createElement('img');
        cardImg.src='./assets/images/'+card+'.png';
        cardImg.setAttribute("id","blackjack-cardImg")
        document.querySelector(activePlayer['div']).appendChild(cardImg);
        hitsound.play(); 
   }   
}
document.querySelector('#blackjack-hit-btn').addEventListener('click',blackjackhit);
function blackjackhit(){
    blackjackGame['ishit']=true;
    if(blackjackGame['istand']===false){
        let card=randomcard();
        showCard(YOU,card);
        updateScore(card,YOU); 
    }     
}
document.querySelector('#blackjack-stand-btn').addEventListener('click',blackjackstand);
function timelapse(ms){
    return new Promise(resolve => setTimeout(resolve,ms)); 
}
async function blackjackstand(){
    if(blackjackGame['ishit']==true){   
        blackjackGame['istand']=true;
        while(DEALER['score']<15){
                await timelapse(1000);
                let card=randomcard();
                showCard(DEALER,card);
                updateScore(card,DEALER);
        }
        blackjackGame['turnsover']=true;
        showresult(computeWinner()); 
    }
}
document.querySelector('#blackjack-deal-btn').addEventListener('click',blackjackdeal);
function blackjackdeal(){
    if(blackjackGame['turnsover']===true){
        blackjackGame['istand']=false;
        blackjackGame['ishit']=false;
        let yourImages=document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
        for(let x=0;x<yourImages.length;x++){
            yourImages[x].remove();
        }
        for(let x=0;x<dealerImages.length;x++){
            dealerImages[x].remove();
        }
        document.querySelector(YOU['scorespan']).innerHTML='0';
        YOU['score']=0;
        document.querySelector(DEALER['scorespan']).innerHTML='0';
        DEALER['score']=0;
        document.querySelector('#blackjack-result').innerHTML="Let's play!";
        document.querySelector('#blackjack-result').style.color="black";
        blackjackGame['turnsover']=false;
    }    
}
function updateScore(card,activePlayer){
        let score=parseInt(document.querySelector(activePlayer['scorespan']).innerText); 
        if(card==='A')
        {
            score+=parseInt(blackjackGame['cardsmap'][card][1]);
            if(parseInt(score)>21)
            {
                score-=11;
                score+=parseInt(blackjackGame['cardsmap'][card][0]);
            }
        }
        else{
        score+=blackjackGame['cardsmap'][card];
        }
        activePlayer['score']=parseInt(score);
        if(score<=21)
        {
            document.querySelector(activePlayer['scorespan']).innerText=score; 
        }
        else{
            document.querySelector(activePlayer['scorespan']).innerText='BUST!'; 
        }
  
}
function computeWinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            blackjackGame['wins']++;
            winner=YOU;
        }
        else if(YOU['score']<DEALER['score']){
           blackjackGame['loss']++;
           winner=DEALER;
        }
        else if(YOU['score']===DEALER['score']){
            blackjackGame['draw']++;
        }
    }
    else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['loss']++;
        winner=DEALER;
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draw']++;
    }
    return winner;
}
function showresult(winner){
        let msg,msgclr;
        if(winner===YOU){
            document.querySelector("#win").innerHTML=blackjackGame['wins'];
            msg='You Won!'
            msgclr='green'
            winsound.play(); 
        }
        else if(winner===DEALER){
            msg='You Lost!'
            msgclr='red';
            lossound.play();
            document.querySelector("#lose").innerHTML=blackjackGame['loss'];
        }
        else{
            msg="It's a tie";
            msgclr='black';
            document.querySelector("#tie").innerHTML=blackjackGame['draw'];
        }
        document.querySelector('#blackjack-result').textContent=msg; 
        document.querySelector('#blackjack-result').style.color=msgclr;
    
}