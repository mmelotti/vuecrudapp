
<template>
  <div>
    <h2 class="text-gold text-center">Workers List</h2>
    <br />
    <br />
    <div class="w-full bg-grey shadow-md mt-5 rounded-sm p-12">
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
                :to="{name: '/worker/edit', params: { id: worker._id }}"
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
    this.$store
      .dispatch(GET_ALL_WORKERS)
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
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
      this.$store
        .dispatch(REMOVE_WORKERS, id)
        .then(response => {
          this.$delete(this.posts, index);
        })
        .catch(error => {
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