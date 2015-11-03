module.exports=function(grunt){

grunt.initConfig({

				
				clean: {
					  build: {
								src: ["reports/*.js"]
							}
					},
				
				//minified the source file 	
				minified : {
									files: {
											src: [
											  'viewAll.js','/public/html/*.js'                
											  
											],
									dest: 'js/minified/'
											}
									},
				//uglify the js files 
				uglify:{
					dist: {
								src: ['viewAll.js','/public/html/*.js'],
								dest: 'min/ems.min.js'
					   	  }
									
					}, 
				//to validate files and syntax checking
				jshint: {
						files: ['viewAll.js','/public/html/*.js'],
							options:{
										globals:{
													jQuery: true,
													reporteroutput : 'jshint-stylish'
												}
									}
					},
					
				mochaTest: {
							reportAll: {
										options: {
													reporter: 'good-mocha-html-reporter'
												  },
										src: ['tests/mochaTestSuite/**/*.js']
										}
							},
				mocha_istanbul :{

							coveralls:	{
									
										src: ['tests/mochaTestSuite/**/*.js'], 
               									 options: {
									                    coverage:true, // this will make the grunt.event.on('coverage') event listener to be triggered 
                   										 check: {
										                        lines: 75,
										                        statements: 75
                    											},
									                    root: './tests', // define where the cover task should consider the root of libraries that are covered by tests 
									                    reportFormats: ['cobertura','lcovonly','html']
											    
                									}
           								 }				
									

						}
				
});
///////load plugins/////////////


grunt.loadNpmTasks('grunt-minified');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-nightwatch');
grunt.loadNpmTasks('grunt-nightwatch-report');


grunt.loadNpmTasks('mochawesome');
grunt.loadNpmTasks('grunt-mocha-istanbul');
grunt.loadNpmTasks('good-mocha-html-reporter');
grunt.loadNpmTasks('grunt-mocha-test');

//////////////////////register the tasks////////////////
grunt.registerTask('default', ['jshint','clean','minified','uglify','mochaTest','mocha_istanbul']);

};