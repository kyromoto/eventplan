process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');

let User = require('./User.Model');
let server = require('./../../app');

let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });
});

describe('/GET user', () => {
    it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/v1/user')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});