<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: ''
        }
    },

    methods: {
        addTodo(){
            
            if(this.newTodoItem !== ''){
                const value = this.newTodoItem.trim();
                
                this.$emit('addTodo', value);
                this.clearInputbox();
            }
        },
        clearInputbox(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        -webkit-appearance: none;

        input{
        margin-left: 20px;
        width: 80%;
        height: 30px;
        border: 1px solid grey;
        border-radius: 8px;
        font-size: 20px;
        }

        button{
        color: white;
        float: right;
        width: 35px;
        height: 35px;
        border-radius: 8px;
        margin-right: 8px;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        border: 1px solid #fff;
        background-color: skyblue;
        }
    }
</style>