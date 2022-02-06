
<template>

   <div class="timer">
        <div class="timer__wrapper">
            <div class="timer__clock">
                  <div class="timer__text">{{gamerMin }}:{{ gamerSec}}</div>
                
            </div>
            <div class="timer__controller controller">
                <div class="controller__next">
                 <button @click="next()">next</button>
                   
                </div>
            </div>
           
        </div>

    </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
      interval: 0
     
    }
  },
  computed:{
     gamerMin(){
       return this.$store.getters.gamerMin
     },
     gamerSec(){
       return this.$store.getters.gamerSec
     }
  },
  methods:{
    // таймер играка
    timerGemer(){
      let  min = this.gamerMin
     let  sec = this.gamerSec
          this.interval = setInterval(() => {
        sec --
          this.$store.commit('setGamerSec',sec)
         if (sec == -1) {
           sec = 10
           min = min -1
             this.$store.commit('setGamerSec',sec)
               this.$store.commit('setGamerMin',min)
           
         }  else if (min == 0 & sec == 0) {
           console.log(0)
           clearInterval(this.interval)
            sec = 0
            min = 0
           this.$store.commit('setGamerSec',sec)
            this.$store.commit('setGamerMin',min)
          
         }
        
          

      }, 1000)
    
    },
    // переход к  таймеру второго игрока
    next(){
      let min = this.gamerMin
      let sec  = this.gamerSec
        this.$store.commit('setGamerSec', sec)
        this.$store.commit('setGamerMin',min)
        clearInterval(this.interval)
        this.$router.push('/gamer2')
       
       
      
    }
  },

  mounted(){
    if (this.gamerMin == 0 && this.gamerSec== 0) {
      clearInterval(this.interval)
    }else{
      this.timerGemer()
    }

  },
  
  


  
}
</script>
