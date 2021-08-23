<template>

    <div>
    
        <div class="btn">
            <div class="input">
                <el-input size="mini" placeholder="Quantidade" v-model="input">
                </el-input>
                <el-input size="mini" placeholder="Cargo" v-model="input1">
                </el-input>
            </div>
            <div>
                <el-button @click="getBy()" icon="el-icon-search" circle></el-button>
            </div>
        </div>
        
        <el-table :data="funcionarios" style="width: 100%">
            <el-table-column prop="nome" label="Nome" width="150">
            </el-table-column>

            <el-table-column prop="cargo" label="Cargo" width="150">
            </el-table-column>

            <el-table-column prop="datanascimento" label="Nascimento" width="150">
            </el-table-column>

            <el-table-column prop="dataentrada" label="Entrada" width="150">
            </el-table-column>

            <el-table-column label="Operações" width="200">
                <template #default="scope">
                    <el-button @click="handleEdit(scope.row.id)" type="text" size="small">Editar</el-button>
                    <el-button @click="handleDelete(scope.row.id)" type="text" size="small">Deletar</el-button>
                    <el-button @click="handleById(scope.row.id)" type="text" size="small">Listar </el-button>


                </template>
            </el-table-column>
        </el-table>

        <router-link to="/">Cadastro</router-link>
    </div>
</template>

<script>
    import api from "../services/api"
    export default {
        data() {
            return {
                funcionarios: [],
                input: '',
                input1: '',

            }
        },

        async mounted() {
                try {
                   
                    const response = await api.get('/funcionarios')
                    
                    this.funcionarios = response.data;
                } catch (error) {

                    alert('Erro ao listar funcionários')
                }


            }

            ,
        methods: {
            handleById(id) {
                this.$router.push(`/listOne/${id}`);

            },
            async handleEdit(id) {
                this.$router.push(`/edit/${id}`);

                console.log("Chamou handleEdit ", id);

            },
            async handleDelete(id) {
                await api.delete(`funcionarios/${id}`);
                const response = await api.get('/funcionarios')
                this.funcionarios = response.data;
            },

            async getBy() {
                const response = await api.get(`/funcionarios?qtde=${this.input}&cargo=${this.input1}`)
                this.funcionarios = response.data;

            }
        }
    }
</script>

<style>
    .btn {
        width: 200px;
        display: flex;
        align-items: center;

    }

    .input {
        margin-right: 5px;

    }
</style>