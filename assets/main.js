//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app =new Vue({
    el:'app',
    
    data:{

    },

    methods:{

    },

    mounted(){
        
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            
            
        })
    }
})