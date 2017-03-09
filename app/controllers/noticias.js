module.exports.listar_noticas = function(application, req, res){
  var connection = application.config.dbConnection();
  var noticiasModels = new application.app.models.NoticiasDAO(connection);

  noticiasModels.getNoticias(function(error, result){

    res.render('noticias/noticias', {noticias : result});

  });
}

module.exports.detalhes_noticia = function(application, req, res){
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  var id_noticia = req.query;

  noticiasModel.getNoticia(id_noticia, function(error, result){

    res.render('noticias/noticia', {noticia : result});
  });
}
