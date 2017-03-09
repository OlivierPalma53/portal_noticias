module.exports.incluir_noticia = function(application, req, res){
  res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
}

module.exports.salvar_noticia = function(application, req, res){

  var noticia = req.body;

  req.assert('titulo','Título é obrigatorio').notEmpty();
  req.assert('resumo','Resumo é obrigatorio').notEmpty();
  req.assert('resumo','Resumo deve conter no minimo 10 e no maximo 100 caracteres').len(10, 100);
  req.assert('autor','Autor é obrigatorio').notEmpty();
  req.assert('data_noticia','Data é obrigatoria').notEmpty().isDate({format: 'YYYY-MM-DD'});
  req.assert('noticia','Conteúdo da notícia e obrigatorio').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia});
    return;
  }

  var connection = application.config.dbConnection();
  var noticiasModels = new application.app.models.NoticiasDAO(connection);

  noticiasModels.salvarNoticia(noticia, function(error, result){

    res.redirect('/noticias');

  });

}
