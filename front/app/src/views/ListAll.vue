<template>

  <div>
    <!-- <el-row> -->
    <div class="container" v-for=" post in posts" :key="post.id">
      <el-card class="card" :body-style="{ padding: '0px' }">
        <span>{{post.texto}}</span>
        <img
          src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          class="image">
        <div style="padding: 14px;">
          <div class="bottom clearfix">


            <el-button icon="el-icon-chat-round" @click="open(post.id)" type="text" class="button">Comentar
            </el-button>
          </div>
        </div>
        <div class="infinite-list content-comment" v-infinite-scroll="load" style="overflow:auto;">
          <div v-for="comment in post.comments" :key="comment.id">
            {{comment.texto }}
          </div>
        </div>

      </el-card>
    </div>
    <!-- </el-row> -->


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
      async reloadPosts() {
        const response = await api.get('/post')

        this.posts = response.data;
      },

      async open(postId) {
        this.$prompt('Please input your e-mail', 'Comentário', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(async ({
          value
        }) => {
          console.log(value);
          const response = await api.post('/comment', {
            texto: value,
            postId
          });
          await this.reloadPosts()
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

    height: 200px;
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

  .card {
    width: 40%;
    height: 400px;
    display: flex;
    justify-content: center;
  }

  .content-comment {
    height: 80px;
    border: solid 1px #4ba4ff69;
  }
</style>