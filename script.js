
// ARRAY DI OBJ

const todos = [
    {
        text: 'tagliare il prato',
        done: true,
    },
    {
        text: 'buttare la spazzatura',
        done: true,
    },
    {
        text: 'comprare crocchette gatti',
        done: false,
    },
    {
        text: 'chiamare avvocato',
        done: false,
    },
]


const app = new Vue({
    el:'#app',
    data:{
        todos : todos,
        newTodo : '',
    }
})