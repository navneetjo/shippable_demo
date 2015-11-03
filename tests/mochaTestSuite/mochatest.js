var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("post method",function(done){

    // calling for post method
    server
    .post("/postData")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
     // res.body.error.should.equal(false);
      done();
    });
  });

    
      it("get method",function(done){

    // calling for get method
    server
    .get("/getData")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
     // res.body.error.should.equal(false);
      done();
    });
  });
}
);


/*
describe('Account', function() {
    it('should return error trying to save duplicate username', function(done) {
      var emp = {
        code:4545,
	name :"Madhavvv",
	city : "Pune"
      };
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to 
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
    supertest(server)
    .post('/postData')
    .send(emp)
    // end handles the response
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.should.have.status(400);
          done();
        });
    });
	
	
	 it('should correctly update an existing account', function(done){
    var body = {
        firstName: 'JP',
        lastName: 'Berd'
    };
    supertest(server)
        .put('/update/:5603ce2bc5f5661700fdf2b9')
        .send(body)
        .expect('Content-Type', /json/)
        .expect(200) //Status code
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            // Should.js fluent syntax applied
            res.body.should.have.property('_id');
                    res.body.name.should.equal('Navin');
                    res.body.city.should.equal('chennai');
					res.body.code.should.equal(4444);                    
                    res.body.id.should.not.equal(null);
            done();
        });
	 });

});*/