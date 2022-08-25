
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
    {
        text: 'svuotare lavastoviglie',
        done: true,
    },
    {
        text: 'piantare orchidea',
        done: false,
    },
]


const app = new Vue({
    el:'#app',
    data:{
        todos : todos,
        newTodo : '',
    },

    computed:{
        todoDone(){
            return this.todos.done === true
        }
    },


    methods: {
        toggleDone(todo){
            todo.done = !todo.done
        },

        // funzione crea obj da pushare nellìarray x creare li
        // utilizzando il v-model dell'input

        addTodo(){
            this.newTodo = this.newTodo.trim() //controllo della spaziatura
            if(this.newTodo != ''){
                this.todos.push({
                    text: this.newTodo,
                    done : false
                })

                this.newTodo = ''
            }
        },
       
    },
})