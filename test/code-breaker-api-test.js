var supertest = require('supertest'),

    chai=require('chai'),   
    should=require('should'),
    asser = require('assert'),

app=require('../app/./app.js');

var request=supertest(app);
var expect = chai.expect;

describe('GET /setsecret:number', ()=>{

    it('should return code 200', function(done){

        request.get('/setsecret/1234')
            .expect(200)
            .end(function(err, res){

                if(err) return document(err)
                done(err)

            })

    });

    it('should return JSON content type', function(done){

        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end(function(err, res){

                if(err) return document(err)
                done(err)

            })

    });

    it('should return JSON content type', function(done){

        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end(function(err, res){

                if(err) return document(err)
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);
                done()

            })

    });

    it('should return correct message', function(done){

        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end(function(err, res){

                if(err) return document(err)
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist('ok, Let the game begins', res.body.message);
                done()

            })
    })

})

describe('GET /guess/:number', function(){

    it('should return code 200', function(done){

        request.get('/guess/1234')
            .expect(200)
            .end(function(err, res){

                if(err) return document(err)
                done(err)

            })

    });

    it('should return JSON content type', function(done){

        request.get('/guess/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end(function(err, res){

                if(err) return document(err)
                done(err)

            })

    });

    it('should return JSON content type', function(done){

        request.get('/guess/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end(function(err, res){

                if(err) return document(err)
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.result);
                assert.equal('XXXX', res.body.result);
                done()

            })

    });

})