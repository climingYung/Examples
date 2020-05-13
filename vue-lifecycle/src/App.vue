<template>
  <div id="app">
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  beforeCreate() {
    //모든 훅중에 가장 먼저 실행되는 훅 data랑 event가 셋팅되지 않은 시점이라 오류가 난다
  },
  computed: {
    titleComponent() {
      console.lopg("I change when this.property changes");
      return this.property;
    }
  },
  created() {
    //created단계에선 data와 enves가 활성화 되어 접근 가능. 가상돔 템플릿은 아직 렌더링 되지 않음
  },

  beforeMount() {
    console.log("this.$el doesn`t exist yet, but it will soon!");
    //  템플릿 렌더함수들이 컴파일 후 -> 첫 렌더링이 일어나기 전에 실행됨. 사용거의
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  
}
</style>
