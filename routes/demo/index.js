var Project = require('../../app/models/Project');
var Module = require('../../app/models/Module');
var logger = require('log4js').getLogger();


module.exports = {
    get: {
        '/': function (req, res) {
            res.render('demo/index', {
                layout: 'layout/default',
                page: {
                    title: 'demo'
                }
            });
        },
        '/api/projects': function (req, res) {
            Project.find({}, function (err, projects) {
                if (err) {
                    res.send(err);
                }
                res.send(projects);
            })
        },
        '/api/modules': function(req, res){
            Module.find({}, function(err, modules){
                Project.populate(modules, { path: 'project'}, function(err, modules){
                    if(err){
                        res.send(err);
                    }
                    res.send(modules);
                });
            });
        }
    },
    post: {
        '/api/projects': function (req, res) {
            Project.create({
                _id: Date.now(),
                projectName: req.body.name
            }, function (err, project) {
                if (err) {
                    res.send(err);
                }
                logger.info('Project added successfully!');
                res.send(project);
            });
        },
        '/api/:projectId/modules': function (req, res) {
            var projectId = req.params.projectId;
            var module = new Module();

            module.moduleName = req.body.name;
            module.project = projectId;


            module.save(function (err, module) {
                if (err) {
                    res.send(err);
                }


                res.send(module);

            });

        }
    }
}