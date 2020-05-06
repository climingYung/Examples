<template>
    <div class="clearfix">
        <button type="button" v-on:click="removeAll">전체삭제</button>
    </div>
</template>

<script>
export default {
    methods: {
        removeAll(){
            this.$emit('removeAll');
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    margin-bottom: 10px;
}
    button{
        width: 150px;
        height: 40px;
        margin-right: 10px;
        font-size: 20px;
        border: none;
        font-weight: 700;
        text-align: center;
        background-color: skyblue;
        color: crimson;
        border-radius: 8px;
        float: right;
    }
</style>m