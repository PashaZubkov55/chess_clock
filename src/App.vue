<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
    margin: 0px;
    padding: 0px;
}
button{
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
}
button:hover{
    cursor: pointer;
}
body{
    background: #000;
}

.timer__wrapper{
    display: flex;
    margin-top: 200px;
    flex-direction: column;
    align-items: center;
  

}
.timer__clock{
    width: 500px;
    height: 500px;
    background: #3617af;
    position: relative;
    border-radius: 20px;
   
}
 .timer__clock::before{
     position: absolute;
     content: '';
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     border: 5px solid green;
     margin: -3%;
     animation: round 8s linear infinite;
   
 }
 @keyframes round{
     0%, 100%{
         clip:  rect(0px, 550px,  20px, 0);
     }
     20%{
        clip:  rect(0px, 20px, 550px, 0);
    }
    50%{
        clip:  rect(550px, 550px, 550px, 0);
    }
    75%{
        clip:  rect(0px, 550px, 550px, 550px);
    }
   
 }
 .timer__text{
     font-size: 100px;
    text-align: center;
    margin-top: 200px;
    color: #fff;
 }
 
 .timer__controller{
     margin-top: 100px;
     display: flex;
     
 }
 .timer__controller > button{
     margin-left: 30px;
     width: 50px;
     height: 50px;
     padding: 30px;
 }
 
 .controller__next>button{
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-left: 30px;

 }
</style>
