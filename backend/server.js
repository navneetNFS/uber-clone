const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, (err) => {
    if(err) {
        console.log(err); 
        server.close()
    }

    console.log(`server is running on http://localhost:${port}/`);
});