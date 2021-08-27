<template>

  <div>
    <el-row>
      <el-col :span="8" v-for=" post in posts" :key="post.id">
        <el-card :body-style="{ padding: '0px' }">
          <span>{{post.texto}}</span>
          <!-- <img
            src="https://4.bp.blogspot.com/-_QJpXegi9wQ/W-7Hgray3II/AAAAAAAAaxQ/BzqbVH5E2iAkQwgxUVK9rYEL23rO7ggeACLcBGAs/s1600/wallpaper-tumblr-para-celular%2B%252836%2529.jpg"
            class="image"> -->
          <div style="padding: 14px;">
            <div class="bottom clearfix">


              <el-button icon="el-icon-chat-round" @click="open" type="text" class="button">Comentar
              </el-button>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>
     

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
        centerDialogVisible: false,
        

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
         open() {
        this.$prompt('Please input your e-mail', 'Comentário', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(({ value }) => {

          const response =  api.post('/comment', this.value);
          console.log(response.data);

          this.$message({
            type: 'success',
            message: 'Seu comentário foi cadastrado' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      },
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