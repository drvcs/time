import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import '../src/common/env';
import Server from '../src/server/ExpressServer';


chai.use(chaiHttp);


/** Prueba del GET
*/
describe(`/GET ${process.env.API_BASEPATH}/time`, () => {
  it('Consultas de prueba que deben existir en la Base de datos', done => {
    const serverr = new Server();
    chai.request(serverr)
      .get(`${process.env.API_BASEPATH}/time`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
