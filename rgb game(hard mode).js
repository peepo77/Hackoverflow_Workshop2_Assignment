
const first=Math.floor((Math.random()*255)+1);
document.getElementById("first").innerHTML=first;
const second=Math.floor((Math.random()*255)+1);
document.getElementById("second").innerHTML=second;
const third=Math.floor((Math.random()*255)+1);
document.getElementById("third").innerHTML=third;

const btn1=document.querySelector('#one');
const btn2=document.querySelector('#two');
const btn3=document.querySelector('#three');
const btn4=document.querySelector('#four');
const btn5=document.querySelector('#five');
const btn6=document.querySelector('#six');


const hard=document.querySelector('#hard');

var numbers=[btn1,btn2,btn3,btn4,btn5,btn6];
var mainbtn=numbers[Math.floor((Math.random()*6))];

const p=Math.floor((Math.random()*255)+1);
const q=Math.floor((Math.random()*255)+1);
const s=Math.floor((Math.random()*255)+1);
const x=Math.floor((Math.random()*255)+1);
const y=Math.floor((Math.random()*255)+1);
const z=Math.floor((Math.random()*255)+1);
const a=Math.floor((Math.random()*255)+1);
const b=Math.floor((Math.random()*255)+1);
const c=Math.floor((Math.random()*255)+1);
const d=Math.floor((Math.random()*255)+1);
const j=Math.floor((Math.random()*255)+1);
const f=Math.floor((Math.random()*255)+1);
const g=Math.floor((Math.random()*255)+1);
const h=Math.floor((Math.random()*255)+1);
const i=Math.floor((Math.random()*255)+1);
    

    const playagain=document.querySelector('#game');
    playagain.addEventListener('click',function(e){
        
        location.reload();
        })
            if(mainbtn==btn1)
{
        
        document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";

        document.getElementById("two").style.backgroundColor="rgb("+x+","+y+","+z+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+p+","+q+","+s+")";

        document.getElementById("four").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("five").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("six").style.backgroundColor="rgb("+g+","+h+","+i+")";


        btn1.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn2.style.visibility="visible";
                btn3.style.visibility="visible";
                btn4.style.visibility="visible";
                btn5.style.visibility="visible";
                btn6.style.visibility="visible";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn4.style.opacity=1;
                btn4.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn5.style.opacity=1;
                btn5.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn6.style.opacity=1;
                btn6.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s linear";
                document.getElementById("four").style.transition="background 0.5s ease";
                document.getElementById("five").style.transition="background 0.5s linear";
                document.getElementById("six").style.transition="background 0.5s linear";
                btn2.removeEventListener("click",removebtn2);
                btn3.removeEventListener("click",removebtn3);
                btn4.removeEventListener("click",removebtn4);
                btn5.removeEventListener("click",removebtn5);
                btn6.removeEventListener("click",removebtn6);

        })

        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn2.style.visibility="hidden";
                        // btn2.style.opacity=0;
                        // btn2.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn3.addEventListener("click",removebtn3);
        function removebtn3(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("three")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn3.style.visibility="hidden";
                // btn3.style.opacity=0;
                // btn3.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn4.addEventListener("click",removebtn4);
        function removebtn4(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("four")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn4.style.visibility="hidden";
                // btn4.style.opacity=0;
                // btn4.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn5.addEventListener("click",removebtn5);
        function removebtn5(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("five")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn5.style.visibility="hidden";
                // btn5.style.opacity=0;
                // btn5.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn6.addEventListener("click",removebtn6);
        function removebtn6(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("six");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn6.style.visibility="hidden";
                // btn6.style.opacity=0;
                // btn6.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }

}

else if(mainbtn==btn2)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+p+","+q+","+s+")";

        document.getElementById("four").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("five").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("six").style.backgroundColor="rgb("+g+","+h+","+i+")";


        btn2.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn3.style.visibility="visible";
                btn4.style.visibility="visible";
                btn5.style.visibility="visible";
                btn6.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn4.style.opacity=1;
                btn4.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn5.style.opacity=1;
                btn5.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn6.style.opacity=1;
                btn6.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s linear";
                document.getElementById("four").style.transition="background 0.5s ease";
                document.getElementById("five").style.transition="background 0.5s linear";
                document.getElementById("six").style.transition="background 0.5s linear";

                btn1.removeEventListener("click",removebtn1);
                btn3.removeEventListener("click",removebtn3);
                btn4.removeEventListener("click",removebtn4);
                btn5.removeEventListener("click",removebtn5);
                btn6.removeEventListener("click",removebtn6);

                
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn1.style.visibility="hidden";
                        // btn1.style.opacity=0;
                        // btn1.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn3.addEventListener("click",removebtn3);
        function removebtn3(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("three");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn3.style.visibility="hidden";
                // btn3.style.opacity=0;
                // btn3.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn4.addEventListener("click",removebtn4);
        function removebtn4(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("four")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn4.style.visibility="hidden";
                // btn4.style.opacity=0;
                // btn4.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn5.addEventListener("click",removebtn5);
        function removebtn5(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("five");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn5.style.visibility="hidden";
                // btn5.style.opacity=0;
                // btn5.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn6.addEventListener("click",removebtn6);
        function removebtn6(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("six");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn6.style.visibility="hidden";
                // btn6.style.opacity=0;
                // btn6.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }       
}
else if(mainbtn==btn3)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+p+","+q+","+s+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";

        document.getElementById("four").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("five").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("six").style.backgroundColor="rgb("+g+","+h+","+i+")";


        btn3.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn2.style.visibility="visible";
                btn4.style.visibility="visible";
                btn5.style.visibility="visible";
                btn6.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn4.style.opacity=1;
                btn4.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn5.style.opacity=1;
                btn5.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn6.style.opacity=1;
                btn6.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("four").style.transition="background 0.5s ease";
                document.getElementById("five").style.transition="background 0.5s linear";
                document.getElementById("six").style.transition="background 0.5s linear";

                btn1.removeEventListener("click",removebtn1);
                btn2.removeEventListener("click",removebtn2);
                btn4.removeEventListener("click",removebtn4);
                btn5.removeEventListener("click",removebtn5);
                btn6.removeEventListener("click",removebtn6);
                
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn1.style.visibility="hidden";
                        // btn1.style.opacity=0;
                        // btn1.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn2.style.visibility="hidden";
                        // btn2.style.opacity=0;
                        // btn2.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn4.addEventListener("click",removebtn4);
        function removebtn4(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("four")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn4.style.visibility="hidden";
                // btn4.style.opacity=0;
                // btn4.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn5.addEventListener("click",removebtn5);
        function removebtn5(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("five");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn5.style.visibility="hidden";
                // btn5.style.opacity=0;
                // btn5.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn6.addEventListener("click",removebtn6);
        function removebtn6(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("six");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn6.style.visibility="hidden";
                // btn6.style.opacity=0;
                // btn6.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }     
}
else if(mainbtn==btn4)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+p+","+q+","+s+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";

        document.getElementById("five").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("six").style.backgroundColor="rgb("+g+","+h+","+i+")";


        btn4.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn2.style.visibility="visible";
                btn3.style.visibility="visible";
                btn5.style.visibility="visible";
                btn6.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn5.style.opacity=1;
                btn5.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn6.style.opacity=1;
                btn6.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s ease";
                document.getElementById("five").style.transition="background 0.5s linear";
                document.getElementById("six").style.transition="background 0.5s linear";
                
                btn1.removeEventListener("click",removebtn1);
                btn2.removeEventListener("click",removebtn2);
                btn3.removeEventListener("click",removebtn3);
                btn5.removeEventListener("click",removebtn5);
                btn6.removeEventListener("click",removebtn6);
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn1.style.visibility="hidden";
                        // btn1.style.opacity=0;
                        // btn1.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn2.style.visibility="hidden";
                        // btn2.style.opacity=0;
                        // btn2.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn3.addEventListener("click",removebtn3);
        function removebtn3(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("three");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn3.style.visibility="hidden";
                // btn3.style.opacity=0;
                // btn3.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn5.addEventListener("click",removebtn5);
        function removebtn5(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("five");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn5.style.visibility="hidden";
                // btn5.style.opacity=0;
                // btn5.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn6.addEventListener("click",removebtn6);
        function removebtn6(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("six");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn6.style.visibility="hidden";
                // btn6.style.opacity=0;
                // btn6.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }  
}
else if(mainbtn==btn5)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+p+","+q+","+s+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("four").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";

        document.getElementById("six").style.backgroundColor="rgb("+g+","+h+","+i+")";


        btn5.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn2.style.visibility="visible";
                btn3.style.visibility="visible";
                btn4.style.visibility="visible";
                btn6.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn4.style.opacity=1;
                btn4.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn6.style.opacity=1;
                btn6.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s ease";
                document.getElementById("four").style.transition="background 0.5s linear";
                document.getElementById("six").style.transition="background 0.5s linear";

                btn1.removeEventListener("click",removebtn1);
                btn2.removeEventListener("click",removebtn2);
                btn3.removeEventListener("click",removebtn3);
                btn4.removeEventListener("click",removebtn4);
                btn6.removeEventListener("click",removebtn6);
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn1.style.visibility="hidden";
                        // btn1.style.opacity=0;
                        // btn1.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn2.style.visibility="hidden";
                        // btn2.style.opacity=0;
                        // btn2.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn3.addEventListener("click",removebtn3);
        function removebtn3(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("three");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn3.style.visibility="hidden";
                // btn3.style.opacity=0;
                // btn3.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn4.addEventListener("click",removebtn4);
        function removebtn4(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("four")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn4.style.visibility="hidden";
                // btn4.style.opacity=0;
                // btn4.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn6.addEventListener("click",removebtn6);
        function removebtn6(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("six");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn6.style.visibility="hidden";
                // btn6.style.opacity=0;
                // btn6.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }  
}
else if(mainbtn==btn6)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+p+","+q+","+s+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+a+","+b+","+c+")";

        document.getElementById("four").style.backgroundColor="rgb("+d+","+j+","+f+")";

        document.getElementById("five").style.backgroundColor="rgb("+g+","+h+","+i+")";

        document.getElementById("six").style.backgroundColor="rgb("+first+","+second+","+third+")";


        btn6.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn2.style.visibility="visible";
                btn3.style.visibility="visible";
                btn4.style.visibility="visible";
                btn5.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn4.style.opacity=1;
                btn4.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn5.style.opacity=1;
                btn5.style.transition="visibilty 0s linear 0s,opacity 300ms";
                
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("four").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("five").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s ease";
                document.getElementById("four").style.transition="background 0.5s linear";
                document.getElementById("five").style.transition="background 0.5s linear";

                btn1.removeEventListener("click",removebtn1);
                btn2.removeEventListener("click",removebtn2);
                btn3.removeEventListener("click",removebtn3);
                btn4.removeEventListener("click",removebtn4);
                btn5.removeEventListener("click",removebtn5);
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn1.style.visibility="hidden";
                        // btn1.style.opacity=0;
                        // btn1.style.transition="visibilty 0s linear 300ms,opacity 300ms";
                
        }
       
        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                        // btn2.style.visibility="hidden";
                        // btn2.style.opacity=0;
                        // btn2.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn3.addEventListener("click",removebtn3);
        function removebtn3(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("three");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn3.style.visibility="hidden";
                // btn3.style.opacity=0;
                // btn3.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn4.addEventListener("click",removebtn4);
        function removebtn4(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("four")
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn4.style.visibility="hidden";
                // btn4.style.opacity=0;
                // btn4.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }
        btn5.addEventListener("click",removebtn5);
        function removebtn5(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("five");
                var fadeEffect=setInterval(function(){
                        if(!fadeTarget.style.opacity){
                                fadeTarget.style.opacity=1;
                        }
                        if(fadeTarget.style.opacity>0){
                                fadeTarget.style.opacity-=0.1;
                        }
                        else{
                                clearInterval(fadeEffect);
                        }
                },25);
                // btn5.style.visibility="hidden";
                // btn5.style.opacity=0;
                // btn5.style.transition="visibilty 0s linear 300ms,opacity 300ms";
        }  
}
