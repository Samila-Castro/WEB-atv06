<template>
<div class="container">
      <p>Nome: {{ funcionario.nome}}</p>
      <p>Cargo: {{ funcionario.cargo}}</p>
      <p>Data de nascimento: {{ funcionario.datanascimento}}</p>
      <p>Data de entrada: {{ funcionario.dataentrada}}</p>
      
       <router-link to="/listar-all">Listar</router-link>
</div>

     

</template>

<script>
   import api from "../services/api"

export default {
  data() {
      return {
        funcionario: {}
      
    }
},

   async  mounted() {
            const id = this.$route.params.id;
             const response =  await api.get(`/funcionarios/${id}`);
             console.log(response.data);
             this.funcionario = response.data;

              
        }

}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px;
}
</style>