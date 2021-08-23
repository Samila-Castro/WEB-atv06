<template>
  <div class="form">
   
    <router-link to="/listar-all">Listar todos</router-link>

    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="Nome" prop="nome">
        <el-input v-model="form.nome"></el-input>
      </el-form-item>

      <el-form-item label="Cargo" prop="cargo">
        <el-input v-model="form.cargo"></el-input>
      </el-form-item>

      <el-form-item label="Data de nascimento" prop="datanascimento">
        <el-input v-model="form.datanascimento"></el-input>
      </el-form-item>

      <el-form-item label="Data de entrada" prop="dataentrada">
        <el-input v-model="form.dataentrada"></el-input>
      </el-form-item>

      <!-- <el-form-item label="Data de venda" prop="date">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date" style="width: 100%;">
          </el-date-picker>
        </el-col>

      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()">Editar</el-button>
      </el-form-item>
    </el-form>
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
        form: {
          nome: '',
          cargo: '',
          datanascimento: '',
          dataentrada: '',
         

        },
        rules: {
          nome: [{
              required: true,
              message: 'Por favor, adicione o nome',
              trigger: 'blur'
            },

          ],
          cargo: [{
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }],
          dataNascimento: [{
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }],
          dataEntrada: [{
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }],
          // dataVenda: [{
          //   type: 'date',
          //   required: true,
          //   message: 'Please pick a time',
          //   trigger: 'change'
          // }],

        }

      }
    },
      async mounted() {
      
            const id = this.$route.params.id;
            const response =  await api.get(`/funcionarios/${id}`);
            this.form = response.data;

              
        },
    methods: {
       submitForm() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            const id = this.$route.params.id;
            await api.put(`/funcionarios/${id}`, this.form)
            alert("Editado com sucesso!")
            this.resetForm()

          } else return false;
        });
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
    justify-content: center;
    margin: 100px;
  }
</style>
