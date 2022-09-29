
const express = require('express')

const Blogpost =require('./routes/blogsroutes') 

const path = require('path');

const bodyParser =require ('body-parser')

const cors = require('cors')


const app = express()
app.use(cors()) 
app.use(bodyParser.json());

app.use('/api/article', Blogpost);
app.use(express.static(__dirname));
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, './build')));

  app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
  });
}
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    
});
