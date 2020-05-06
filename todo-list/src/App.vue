<template>
    <div id="app">
        <TodoHeader />
        <TodoInput v-on:addTodo="addTodo" />
        <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo" />
        <TodoFooter v-on:removeAll="removeAll" />
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    },
    data(){
        return {
            todoItems: []
        }
    },
    created(){
        const items = JSON.parse(localStorage.getItem('items'));
        //  localStroage에서 items를 가져온다
        if (items === null || !Array.isArray(items)) {
            this.clearAll();
        }
        // items가 null이거나 배열이 아닐떄 초기화 해줌
        if(items.length > 0){
            for(var i = 0; i < items.length; i++){
                this.todoItems.push(items[i]);
            }
        }
    },
    methods: {
        addTodo(todoItem){
            const items = JSON.parse(localStorage.getItem('items'));
            items.push(todoItem);
            //localstorage에서 가져와 서 todoItem에 push

            localStorage.setItem('items', JSON.stringify(items)); // Data 저장
            this.todoItems.push(todoItem); // UI
        },
        removeTodo(todoItem){
            //getItem으로 items를 가져온다. -> 가져온 items로 index를 가져온후 클릭된 것만 지우도록 한다.
            const items = JSON.parse(localStorage.getItem('items'));
            const index = items.indexOf(todoItem);
            items.splice(index, 1);

            localStorage.setItem('items', JSON.stringify(items)); 
            this.todoItems.splice(index, 1); 
        },
        removeAll(){
            //localStorage와 todoItems의 Ui모두 클리어 해준다.
            localStorage.setItem('items', '[]');
            this.todoItems = [];
        }
    }
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';

  #app{
    width: 375px;
    border: 1px solid grey;
  }
</style>