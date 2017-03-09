module.exports = function(application){

  application.get('/noticias', function(req, res){
    application.app.controllers.noticias.listar_noticas(application, req, res);
  });

  application.get('/noticia', function(req, res){
      application.app.controllers.noticias.detalhes_noticia(application, req, res);
  });


};
