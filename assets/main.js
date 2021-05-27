//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app =new Vue({


    el:'#app',
    
    data:{
        listamail:[],
    },

    methods:{

    },

    mounted(){
        for(var i=0; i<10; i++){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    console.log(response.data.response);
            
                    this.listamail.push(response.data.response);
                })
        }  
        console.log(this.listamail);

    }
})