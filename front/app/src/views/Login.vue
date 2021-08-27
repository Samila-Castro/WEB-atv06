<template>
    <div class="container">


       <h1>Sign In To Plataforma</h1> 
        <form class="form" @submit="(e) => submitForm(e)">

            <label for="">
                <input type="text" id="name" placeholder="Name" v-model="form.name" required />
            </label>
            <label for="">
                <input type="password" id="senha" placeholder="Password" v-model="form.password" required />
            </label>
           <button type="submit">Sign in</button>

        </form>

    </div>

</template>

<script>
    import api from "../services/api"

    export default {
        name: 'Login',
        components: {


        },
        methods: {
            async submitForm(e) {
                try {
                    e.preventDefault()
                    const result = await api.post('/session', this.form)
                    console.log(result.data);
                    localStorage.setItem('@atividade-login', JSON.stringify(result.data));
                    alert("Login com sucesso!")
                    this.$router.push(`/`);
                } catch (error) {
                    console.log(error);
                    alert("Erro ao tentar login!")
                }
            },

        },

        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },


    }
</script>

<style scoped>
    .container {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    h1 {
        font-size: 25px;
        color: #4E5FCD;
        
    }

    .form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px;
        
    }
    input {
    border-radius: 10px;
    width: 300px;
    margin: 5px;
    height: 30px;
    border: none;
    font-size: 15px;
    padding: 15px;
    background-color: #ecf0f1;
  }
</style>