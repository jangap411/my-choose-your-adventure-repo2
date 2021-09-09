let express = require('express')
let path = require('path')
let app = express()
let port = 8000;

//define the routes to the pages
app.get(
    '/home', function(_request,response){
        console.log('home page loaded.')
        response.sendFile(path.join(__dirname,'index.html'))
    }
)

app.get(
    '/travel', function(_request,response){
        console.log('holiday page loaded.')
        response.sendFile(path.join(__dirname,'travel.html'))
    }
)

app.get(
    '/house', function(_request,response){
        console.log('house page loaded.')
        response.sendFile(path.join(__dirname,'home.html'))
    }
)

//use static resources, load css.
app.use(express.static('./'))

//listen port
app.listen(port, ()=>console.log(`Example app listening at http://localhost:${port}`))


/**----------------> <------------------------------------
 * 	Database connection and interaction with Expressjs Server
 * 
*/