//var server= require('./bin/www');
var mongoose= require('mongoose');
var app= require('express')();
var bodyParser= require('body-parser');
var express = require('express');
//create connection
//var db = mongoose.createConnection('localhost','test');

mongoose.connect('mongodb://localhost/test');
var db=mongoose.connection;


console.log("connected to database");
console.log("in viewAll file");
db.once('open',function(){

//create schema 
var employeesSchema =  new mongoose.Schema({
	code:Number,
	name :String,
	city : String
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname+'/public/html'));


//create a model
var employee= mongoose.model('employee',employeesSchema);

//creating an object for insert into table


app.get('/getData',function(req,res){
employee.find(function(err, data) {
    if (err) {
	  // insert correct status code	
      return res.send(err);
    } 
	console.log("message: " +data);
    res.json(data);
//	res.send(data);
	res.end();
  });
});




app.post('/postData',function(req,res){
var emp= new employee(req.body);

emp.code=req.body.code;
emp.name=req.body.name;
emp.city=req.body.city;


//insert object into table
emp.save(function(err,data){
if(err)console.log("getting error"+err);
console.log("getting data"+data);
res.send({message : "Employee details added successfully"});
//response.send("data inserted");
//process.exit();
});
});

////////////for updating data//////
app.put('/update/:id',function(req,res){
employee.findOne({ _id: req.params.id }, function(err,emp) {
  
console.log("complete data is ;- "+emp)
	emp.code = req.body.code;
    emp.name = req.body.name;
     emp.city = req.body.city;
    
		emp.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
         
         console.log("id"+emp._id);
         console.log("Employee Code :- "+emp.code);
		 console.log("Name of Employee :- "+emp.name);
		 console.log("City :- "+emp.city);
         res.json({ message: 'Employee details updated!' });
		   
    });
  });
});

//////////////////////deleting the data from database//////////////
app.delete('/delete/:id',function(req,res){
	employee.remove({_id: req.params.id},function(err){
    if (err){
      return res.send(err);
    }
	res.send({ message: 'Successfully deleted' });
 });
 });
    
 });


app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port : ' + server.address().port);
});
