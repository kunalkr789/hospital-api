//During the test the env variable is set to test
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Doctor = require("../models/doctor");

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Doctors", () => {
  describe("/POST register doctor", () => {
    beforeEach((done) => {
      //Before each test we empty the database
      Doctor.remove({}, (err) => {
        done();
      });
    });
    let username = "kunal";
    it("It should not register a doctor if username or password is missing", (done) => {
      let doctor = {
        username: username,
      };
      chai
        .request(server)
        .post("/v1/doctors/register")
        .send(doctor)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("message").eql("Internal Server Error");
          done();
        });
    });

    it("It should register a doctor if the username doesn't exist already", (done) => {
      let doctor = {
        username: username,
        password: "12345",
      };
      chai
        .request(server)
        .post("/v1/doctors/register")
        .send(doctor)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have
            .property("message")
            .eql("Registration successful");
          done();
        });
    });
  });
});
