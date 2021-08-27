<template>
  <div>
  <div class="cadastro">
      <h2>Register a post</h2>
      <form class="form" @submit="(e) => submitForm(e)">
        <label> 
          <input type="text" v-model="post.texto" id="texto"  />
        </label>
        <button type="submit">Registrar post</button>
      </form>
    </div>
   
      <router-link to="/listar-all">To ListAll</router-link>


  </div>
  

     

</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import api from "../services/api"

  export default {
    name: 'Home',
    data() {
      return {
        post: {
          texto: '',

        },

      }
    },
    methods: {
      async submitForm() {
       
           await  api.post('/post', this.post)
            alert("Cadastrado com sucesso!");
            this.resetForm()

         
      },
      resetForm() {
        this.$refs.form.resetFields();
      }
    }
  }
</script>
<style>
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
    height: 20px;
    border: none;
    font-size: 15px;
    padding: 15px;
    background-color: #ecf0f1;
  }
</style>
