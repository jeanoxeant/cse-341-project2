 const swaggerAutogen = require('swagger-autogen')();

 const doc = {
    info: {
        title: 'Products Api',
        description: 'Products Api'
    },
   /* info2: {
        title: 'Customers Api',
        description: 'Customers Api'
    }*/
    host: 'localhost:8000',
    schemes: ['https', 'http']
 };

 const outputFile = './swagger.json';
 const endpointsFiles = ['./routes/index.js'];

 // this will generate swagger.json
 swaggerAutogen(outputFile, endpointsFiles, doc);