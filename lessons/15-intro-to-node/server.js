const http = require('http')
const fs = require('fs')

const handleRequest = (request, response) => {
    console.log('i had a request', request.url)

    if (request.url === '/memes') {
        fs.readFile('./memes.txt', 'utf8', (error, data) => {
            if (error) {
                response.end('oops')
            } else {
                response.end(data)
            }
        })

        return;
    } else if (request.url === '/newtask') {
        return response.end('<html><form><input/><input type="submit"/></form><<h2>done</h2></html>')
    }

    response.end('<html><h2>done</h2></html>')
}

const server = http.createServer(handleRequest)

server.listen(5678);