import chai from 'chai';
import chaiHttp from 'chai-http';
import { todoModel } from '../src/db/todos'; 
import { describe, it } from 'mocha';
import { app } from '../src/index'; 
import express from "express";

chai.use(chaiHttp);
const expect = chai.expect;

describe('Todo API', () => {
  describe('POST /create', () => {
    it('should add todo', async () => {
      const res = await chai
        .request(app)
        .post('/addTodo')
        .send({ category: 'Test', description: 'First test '});
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('category', 'description');
    });

    it('should return 400 if all required fields are not filled', async () => {
      const res = await chai
        .request(app)
        .post('/create')
        .send({ category: 'all fields are mandatory' });
      expect(res).to.have.status(400);
    });
  });
});
