var http = require('http');

var server = http.createServer( function(req, res){

  var categoria = req.url;

  if(categoria == '/tecnologia') {
    res.end("<html><body>Noticias de tecnologia</body></html>");
  } else if (categoria == '/moda'){
    res.end("<html><body>Noticias de Moda</body></html>");
  } else {
    res.end("<html><body>Site de Noticias</body></html>");

  }


}).listen(3000);
