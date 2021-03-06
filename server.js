const hapi = require("hapi");
const server = new hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

server.route({
    method: "GET",
    path: '/',
    handler: function (req, res) {
        res("hello world!");
    }
})

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("Server running at", server.info.uri);
})