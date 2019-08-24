var server=require('./app/app');
var port=process.env.PORT||3000;

server.listen(port, ()=>{

    console.log('server running codeBreaker API on port %d', port);


});