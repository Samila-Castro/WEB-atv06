<template>
  <div class="form">
   
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="Nome" prop="nome">
        <el-input v-model="form.nome"></el-input>
      </el-form-item>

      <el-form-item label="Cargo" prop="cargo">
        <el-input v-model="form.cargo"></el-input>
      </el-form-item>

      <el-form-item label="Nascimento" prop="dataNascimento">
        <el-input v-model="form.dataNascimento"></el-input>
      </el-form-item>

      <el-form-item label="Entrada" prop="dataEntrada">
        <el-input v-model="form.dataEntrada"></el-input>
      </el-form-item>

      <!-- <el-form-item label="Data de venda" prop="date">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date" style="width: 100%;">
          </el-date-picker>
        </el-col>

      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()">Criar</el-button>
      </el-form-item>
    </el-form>
     <router-link to="/listar-all">Listar todos</router-link>
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
          dataNascimento: '',
          dataEntrada: '',
          

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
         

        }

      }
    },
    methods: {
       submitForm() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            await api.post('/funcionarios', this.form)
            alert("Cadastrado com sucesso!");
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
