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
btn4.style.display="none";
btn5.style.display="none";
btn6.style.display="none";
const easy=document.querySelector('#easy');

var numbers=[btn1,btn2,btn3];
var mainbtn=numbers[Math.floor((Math.random()*3))];
const playagain=document.querySelector('#game');
const newcolor=document.querySelector('.gamer');
console.log(mainbtn);

const p=Math.floor((Math.random()*255)+1);
const q=Math.floor((Math.random()*255)+1);
const s=Math.floor((Math.random()*255)+1);
const x=Math.floor((Math.random()*255)+1);
const y=Math.floor((Math.random()*255)+1);
const z=Math.floor((Math.random()*255)+1);

        playagain.addEventListener('click',function(e){
        
                location.reload();
                })
console.log(mainbtn);


        if(mainbtn==btn1)
{
        
        document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";

        document.getElementById("two").style.backgroundColor="rgb("+x+","+y+","+z+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+p+","+q+","+s+")";

        btn1.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn2.style.visibility="visible";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.visibility="visible";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.transition="background 0.5s linear";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.transition="background 0.5s linear";
                // btn2.removeEventListener("click")

                btn2.removeEventListener("click",removebtn2);
                btn3.removeEventListener("click",removebtn3);
        })

        btn2.addEventListener("click",removebtn2);
        function removebtn2(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("two")
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
                        // btn2.toggleAttribute("slow");
                
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
  
}
else if(mainbtn==btn2)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+p+","+q+","+s+")";
        btn2.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn3.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn3.style.opacity=1;
                btn3.style.transition="visibilty 0s linear 0s,opacity 300ms";
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")"
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("three").style.transition="background 0.5s linear";
                btn1.removeEventListener("click",removebtn1);
                btn3.removeEventListener("click",removebtn3);
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one")
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

}
else if(mainbtn==btn3)
{
        document.getElementById("one").style.backgroundColor="rgb("+x+","+y+","+z+")";

        document.getElementById("two").style.backgroundColor="rgb("+p+","+q+","+s+")";
        
        document.getElementById("three").style.backgroundColor="rgb("+first+","+second+","+third+")";
        btn3.addEventListener('click',function(e){
                document.getElementById("correct").innerHTML="Correct !!!";
                document.getElementById("game").innerHTML="PLAY AGAIN";
                btn1.style.visibility="visible";
                btn2.style.visibility="visible";
                btn1.style.opacity=1;
                btn1.style.transition="visibilty 0s linear 0s,opacity 300ms";
                btn2.style.opacity=1;
                btn2.style.transition="visibilty 0s linear 0s,opacity 300ms";
                document.getElementById("heading").style.backgroundColor="rgb("+first+","+second+","+third+")"
                document.getElementById("one").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("two").style.backgroundColor="rgb("+first+","+second+","+third+")";
                document.getElementById("heading").style.transition="background 0.5s ease";
                document.getElementById("one").style.transition="background 0.5s linear";
                document.getElementById("two").style.transition="background 0.5s linear";
                btn1.removeEventListener("click",removebtn1);
                btn2.removeEventListener("click",removebtn2);
                
        })

        btn1.addEventListener("click",removebtn1);
        function removebtn1(){
                document.getElementById("correct").innerHTML="Try Again";
                var fadeTarget=document.getElementById("one")
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
                var fadeTarget=document.getElementById("two")
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
}


