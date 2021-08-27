<template>

    <div>
    <el-row>
  <el-col :span="8" v-for=" post in posts" :key="post.id">
    <el-card :body-style="{ padding: '0px' }">
    <span>{{post.texto}}</span>
      <img src="https://4.bp.blogspot.com/-_QJpXegi9wQ/W-7Hgray3II/AAAAAAAAaxQ/BzqbVH5E2iAkQwgxUVK9rYEL23rO7ggeACLcBGAs/s1600/wallpaper-tumblr-para-celular%2B%252836%2529.jpg" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          
          
          <el-button  icon="el-icon-chat-round" type="text" class="button">Comentar</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
        <!--     
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
        </div> -->
<!-- 
        <el-table :data="posts" style="width: 100%">
            <el-table-column prop="id" label="Id" width="150">
            </el-table-column>
            <el-table-column prop="texto" label="Texto" width="150">
            </el-table-column> -->

            <!-- <el-table-column prop="cargo" label="Cargo" width="150">
            </el-table-column>

            <el-table-column prop="datanascimento" label="Nascimento" width="150">
            </el-table-column>

            <el-table-column prop="dataentrada" label="Entrada" width="150">
            </el-table-column> -->

            <!-- <el-table-column label="Operações" width="200">
                <template #default="scope">
                    <el-button @click="handleEdit(scope.row.id)" type="text" size="small">Editar</el-button>
                    <el-button @click="handleDelete(scope.row.id)" type="text" size="small">Deletar</el-button>
                    <el-button @click="handleById(scope.row.id)" type="text" size="small">Listar </el-button>


                </template>
            </el-table-column> -->
        <!-- </el-table> -->

        <router-link to="/">Fazer post</router-link>
    </div>
</template>

<script>
    import api from "../services/api"
    export default {
        data() {
            return {
                posts: [],
                currentDate: new Date(),
                centerDialogVisible: false

            }
        },

        async mounted() {
                try {

                    const response = await api.get('/post')

                    this.posts = response.data;
                    console.log(response.data);
                } catch (error) {

                    alert('Erro ao listar posts')
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
    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>