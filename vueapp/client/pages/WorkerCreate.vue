<template>
  <div>
    <h2 class="text-gold text-center">New Worker</h2>

    <div class="w-full bg-grey shadow-md mt-5 rounded-sm p-12">
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

      <btn label="Create" @click="addWorker" />
    </div>
  </div>
</template>

<script>
import { POST_ADD_WORKERS } from "@store/worker/actions";
export default {
  data() {
    return {
      worker: {}
    };
  },
  methods: {
    addWorker() {
      this.$store
        .dispatch(POST_ADD_WORKERS, this.worker)
        .then(response => {
          this.$router.push("/worker/list");
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
