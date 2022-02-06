<template>
     <div class="timer">
        <div class="timer__wrapper">
            <div class="timer__clock">
                  <div class="timer__text">{{gamer2Min}}:{{gamer2Sec}}</div>
                
            </div>
            <div class="timer__controller controller">
                
                <div class="controller__next">
                     <button @click="prev()">prev</button>
                </div>
            </div>
           
        </div>

    </div>
 
 
</template>
 <script>
// @ is an alias to /src


export default {
  name: 'Gamer2',
  data(){
    return {
      interval:0
    }
  },
  
  computed:{
     gamer2Min(){
       return this.$store.getters.gamer2Min
     },
     gamer2Sec(){
       return this.$store.getters.gamer2Sec
     }
  },
  methods:{
   // таймер играка
    timerGamer2(){
      let  min = this.gamer2Min
     let  sec = this.gamer2Sec
       this.interval = setInterval(() => {
        sec --
          this.$store.commit('setGamer2Sec',sec)
         if (sec == -1) {
           sec = 10
           min = min -1
             this.$store.commit('setGamer2Sec',sec)
             this.$store.commit('setGamer2Min',min)
           
         }  else if (min == 0 & sec == 0) {
           console.log(0)
           clearInterval(this.interval)
           sec = 0
           min = 0
            this.$store.commit('setGamer2Sec',sec)
             this.$store.commit('setGamer2Min',min)
         }
          

      }, 1000)
     
     
    },
    // переход к  таймеру первого игрока
     prev(){
      let min = this.gamer2Min
      let sec  = this.gamer2Sec
        this.$store.commit('setGamer2Sec', sec)
        this.$store.commit('setGamer2Min',min)
        clearInterval(this.interval)
        this.$router.push('/')


    }
  },

  mounted(){
    if (this.gamer2Min == 0 && this.gamer2Sec== 0) {
      clearInterval(this.interval)
    }else{
      this.timerGamer2()
    }

  },
  
  


  
}
</script>