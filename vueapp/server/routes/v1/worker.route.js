const express = require("express");
const workerRoutes = express.Router();

// Require Worker model in our routes module
let Worker = require("./worker.model");

// Defined store route
workerRoutes.route("/add").post(function(req, res) {
  let worker = new Worker(req.body);
  worker
    .save()
    .then(() => {
      res.status(200).json({ business: "business in added successfully" });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
workerRoutes.route("/list").get(function(req, res) {
  Worker.find(function(err, workers) {
    if (err) {
      res.json(err);
    } else {
      res.json(workers);
    }
  });
});

// Defined edit route
workerRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Worker.findById(id, function(err, worker) {
    if (err) {
      res.json(err);
    }
    res.json(worker);
  });
});

//  Defined update route
workerRoutes.route("/update/:id").post(function(req, res) {
  Worker.findById(req.params.id, function(err, worker) {
    if (!worker) res.status(404).send("data is not found");
    else {
      worker.name = req.body.name;
      worker.role = req.body.role;
      worker
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(() => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
workerRoutes.route("/delete/:id").delete(function(req, res) {
  Worker.findByIdAndRemove({ _id: req.params.id }, function(err) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = workerRoutes;
