<template>
  <div>
    <h1>New Worker</h1>
    <h2 class="text-center text-gold">Register</h2>
    <form @submit.prevent="editWorker">
      <div class="row">
        <label>Name:</label>
        <br />
        <br />
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" class="form-control" v-model="worker.name" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <label>Roles:</label>
      <br />
      <br />
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <textarea class="form-control" v-model="worker.role" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { POST_EDIT_WORKERS, GET_ONE_WORKER } from "@store/worker/actions";
export default {
  data() {
    return {
      worker: {}
    };
  },
  created() {
    console.log("create edit");
    console.log(this.$route.params.id);
    this.$store
      .dispatch(GET_ONE_WORKER, this.$route.params.id)
      .then(response => {
        console.log("response ok editt ");
        console.log("response ok " + JSON.stringify(response.data));
        this.worker = response.data;
      })
      .catch(error => {
        console.log("response nnnnnecit ");

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
    editWorker() {
      console.log("response okedittttt " + JSON.stringify(this.worker));
      let myData = {
        _id: this.worker._id,
        name: this.worker.name,
        role: this.worker.role
      };
      console.log(myData);
      this.$store
        .dispatch(POST_EDIT_WORKERS, this.worker)
        .then(response => {
          console.log("response ok ");
          console.log("response ok " + JSON.stringify(response.data));
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
