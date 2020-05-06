<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="index">
                {{ todoItem.split() }}
                <button type="button" v-on:click="removeTodo(todoItem, index)">x</button>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo( todoItems, index){
            this.$emit('removeTodo', todoItems, index);
        },
    }    
}
</script>
<style lang="scss" scoped>
  ul{
      width: 100%;
      margin: 10px 0;
      box-sizing: border-box;
      border-top: 1px solid grey;
      padding: 10px;
        li{
            width: 100%;
            padding: 10px 0;
            border-bottom:  1px solid grey;

            button{
                width: 20px;
                height: 20px;
                border: 1px solid #fff;
                color: red;
                background-color: #fff;
                text-align: center;
            }
        }
  }
</style>