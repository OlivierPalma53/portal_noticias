module.exports = function(application) {
    application.get('/admin', function(req, res) {
        application.app.controllers.admin.incluir_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req, res) {
        application.app.controllers.admin.salvar_noticia(application, req, res);
    });
};