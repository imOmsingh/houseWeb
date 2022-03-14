ele=document.querySelector(".screen");
screen_1=document.querySelector("#screen-1");
screen_2=document.querySelector("#screen-2");
screen_3=document.querySelector("#screen-3");
screen_4=document.querySelector("#screen-4");
screen_5=document.querySelector("#screen-5");
screen_6=document.querySelector("#screen-6");
screen_7=document.querySelector("#screen-7");
screen_8=document.querySelector("#screen-8");
screen_9=document.querySelector("#screen-9");
screen_10=document.querySelector("#screen-10");
screen_11=document.querySelector("#screen-11");
screen_12=document.querySelector("#screen-12");
var scrwidth=window.innerHeight-window.innerHeight/3;
var eletop=ele.getBoundingClientRect().top;
var newscr=window.pageYOffset;
var cards_1=document.getElementsByClassName('card-1');
var screens_1=cards_1[0].children;
var cards_2=document.getElementsByClassName('card-2');
var screens_2=cards_2[0].children;
var cards_3=document.getElementsByClassName('card-3');
var screens_3=cards_3[0].children;

var runCount=0
function run(){
    if (runCount==0){
        eletop=ele.getBoundingClientRect().top;
    
    var i=0;
    if (eletop<scrwidth){
        runCount++;
        if(scrwidth-eletop>0){
            screen_1.style.animationName='trans-start-s1';
        }
        if(scrwidth-eletop>0){
            screen_2.style.animationName='trans-start-s2';
        }    
        if(scrwidth-eletop>0){
            screen_3.style.animationName='trans-start-s3';
        }
    var count1=0;
    var count3=0;
    var count2=0;
    setInterval(() => {
        screens_1[count1%4].style.zIndex=count1;
        count1++;
    }, 2000);
    setInterval(() => {
        screens_2[count2%4].style.zIndex=count1;
        count2++;
    }, 2000);
    setInterval(() => {
        screens_3[count3%4].style.zIndex=count3;
        count3++;
    }, 2000);
    }


    if (eletop<scrwidth){
        if(scrwidth-eletop>0){
            screen_5.style.animationName='trans-mid-s1';
        }
        if(scrwidth-eletop>0){
            screen_6.style.animationName='trans-mid-s2';
        }    
        if(scrwidth-eletop>0){
            screen_7.style.animationName='trans-mid-s3';
        }
    }
    if (eletop<scrwidth){
        if(scrwidth-eletop>0){
            screen_9.style.animationName='trans-end-s1';
        }
        if(scrwidth-eletop>0){
            screen_10.style.animationName='trans-end-s2';
        }    
        if(scrwidth-eletop>0){
            screen_11.style.animationName='trans-end-s3';
        }
    }
    
    }
}


window.addEventListener('scroll', () => {
    run();
   })

   var flag=0;

function menuToggle(){
    
    if(flag==0){
        var fullNav=document.getElementsByClassName("fullNavbar");
        fullNav[0].style.animationDuration='3s';
    fullNav[0].style.animationName='navDown';
    var fullNavBut=document.getElementsByClassName('fullNav-but');
    for(var i=0;i<3;i++){
        fullNavBut[i].style.display='block';
        fullNavBut[i].style.animationName='navBut';
    }
    flag=1;
    }
    else{
        var fullNav=document.getElementsByClassName("fullNavbar");
        fullNav[0].style.animationDuration='0.6s';
        fullNav[0].style.animationName='navBarUp';
        var fullNavBut=document.getElementsByClassName('fullNav-but');
        for(var i=0;i<3;i++){
            fullNavBut[i].style.display='none';
        }   
        flag=0;
    }
}
  