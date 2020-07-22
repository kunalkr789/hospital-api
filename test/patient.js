//During the test the env variable is set to test
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Patient = require("../models/doctor");

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Patients", () => {
  let bearerToken =
    "bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE4ODk5MWYzNThiYTI3MjBkN2M0ZTAiLCJ1c2VybmFtZSI6Imt1bmFsIiwiY3JlYXRlZEF0IjoiMjAyMC0wNy0yMlQxODo0Njo0MS4zMTZaIiwidXBkYXRlZEF0IjoiMjAyMC0wNy0yMlQxODo0Njo0MS4zMTZaIiwiX192IjowLCJpYXQiOjE1OTU0NDM2MzAsImV4cCI6MTU5NTQ0MzczMH0.IFtlEY9Mwn7G7VcxPfExBG8_ljaHtzPvxb4s2eoYdQw";
  describe("POST /v1/patient/register", () => {
    it("It should register a patient with valid phone no", (done) => {
      let patient = {
        phone: "9999966666",
      };
      chai
        .request(server)
        .post("/api/v1/patients/register")
        .set("Authorization", bearerToken)
        .send(patient)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have
            .property("message")
            .eql("Patient registered successfully");
          res.body.should.have.property("patient");
          res.body.patient.should.have.property("phone");
          res.body.patient.should.have.property("phone").eql(phone);
          done();
        });
    });
  });
});
