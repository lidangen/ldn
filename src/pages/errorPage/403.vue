<template>
  <div class="bullshit">
    <div class="bullshit_headline">
         {{message}}
    </div>
    <div class="bullshit_info">please check network is true</div>
    <a @click="backToHome" class="bullshit_return-home">return home</a>
  </div>
</template>

<script>
export default {
  name:'page404',
  data(){
    return {}
  },
  methods:{
    backToHome(){
      this.$router.push('/')
    }
  },
  computed:{
    message(){
      return '404 your page lost'
    }
  }

}
</script>

<style>

</style>