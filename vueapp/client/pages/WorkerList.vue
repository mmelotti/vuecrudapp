
<template>
  <div>
    <h1>Workers</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'create' }" class="btn btn-primary">Worker List</router-link>
      </div>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(worker, index) in posts" :key="worker._id">
          <td>{{ worker.name }}</td>
          <td>{{ worker.role }}</td>
          <td>
            <router-link
              :to="{name: 'edit', params: { id: worker._id }}"
              class="btn btn-primary"
            >Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deleteWorker(worker._id,index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { REMOVE_WORKERS, GET_ALL_WORKERS } from "@store/worker/actions";
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    console.log("list hereee!!");
    this.$store
      .dispatch(GET_ALL_WORKERS)
      .then(response => {
        console.log("response ok ");
        console.log("response ok " + JSON.stringify(response.data));
        this.posts = response.data;
      })
      .catch(error => {
        console.log("response nnnnn!!ok ");

        // error.response.data => { email: 'This user already exists' }
        // => ['email']
        // this.errors.add({ field: 'email', msg: 'This user already exists' })
        Object.keys(error.response.data).forEach(field => {
          this.errors.add({
            field,
            msg: error.response.data[field]
          });
        });
      });
  },
  methods: {
    deleteWorker(id, index) {
      console.log("deleting" + index);
      this.$store
        .dispatch(REMOVE_WORKERS, id)
        .then(response => {
          console.log("response ok ", JSON.stringify(this.posts));
          console.log("response ok " + JSON.stringify(response.data));
          this.$delete(this.posts, index);
        })
        .catch(error => {
          console.log("response nnnnn!!ok ");

          // error.response.data => { email: 'This user already exists' }
          // => ['email']
          // this.errors.add({ field: 'email', msg: 'This user already exists' })
          Object.keys(error.response.data).forEach(field => {
            this.errors.add({
              field,
              msg: error.response.data[field]
            });
          });
        });
    }
  }
};
</script>