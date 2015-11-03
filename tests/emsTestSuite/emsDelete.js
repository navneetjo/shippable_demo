module.exports = {
  'Delete Test for EMS-APPLICATION' : function (client) {
	  client
      .url('http://localhost:3000/#/getData')
      .waitForElementVisible('body', 1000)
      .assert.title('Employee Application')
      .click('body > div.ng-scope > div > div > table > thead > tr:nth-child(2) > td:nth-child(5) > input')
	  .url('http://localhost:3000/#/getData')
	  .waitForElementVisible('body', 1000)
	  .getText('body > div.ng-scope > div > div > table > thead > tr:nth-child(2) > td:nth-child(1)',function(result){
		  this.assert.equal(result.value,'body > div.ng-scope > div > div > table > thead > tr:nth-child(2) > td:nth-child(1)');
		  
	  })
	  .end();
     
  },

}
