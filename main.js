const App = Vue.createApp({


    data(){
        return{
            name:'',
            email:'',
            password:'',
            password_confirm:'',
        }
    },

    methods:{
        sendData(){
            const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
            };
            const jsonData = JSON.stringify(data);

            console.log(jsonData); 
        }


    }










}).mount('#app')