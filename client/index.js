var path = require('path');

var express = require('express');

var router  = express.Router();

var jQueryDir     = path.join(__dirname, '..', 'node_modules', 'jquery', 'dist'),
    underscoreDir = path.join(__dirname, '..', 'node_modules', 'underscore'),
    backboneDir   = path.join(__dirname, '..', 'node_modules', 'backbone'),
    handlebarsDir = path.join(__dirname, '..', 'node_modules', 'handlebars', 'dist'),
    statemanDir   = path.join(__dirname, '..', 'node_modules', 'stateman'),
    bootstrapDir  = path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist'),
    lessDir       = path.join(__dirname, '..', 'node_modules', 'less', 'dist'),
    clientStaticsDir    = path.join(__dirname, 'statics'),
    clientViewsDir      = path.join(__dirname, 'views');

router.use('/lib/jquery',     express.static(jQueryDir));
router.use('/lib/underscore', express.static(underscoreDir));
router.use('/lib/backbone',   express.static(backboneDir));
router.use('/lib/handlebars', express.static(handlebarsDir));
router.use('/lib/stateman',   express.static(statemanDir));
router.use('/lib/bootstrap',  express.static(bootstrapDir));
router.use('/lib/less',       express.static(lessDir));
router.use('/client/views',   express.static(clientViewsDir));
router.use('/client/statics', express.static(clientStaticsDir));

/*router.use('/', (req, res) => {
  res.redirect('/app');
});*/

router.use('/app', (req, res) => {
  res.sendFile(path.join(clientViewsDir, 'app.html'));
});

router.use('/login', (req, res) => {
  res.sendFile(path.join(clientViewsDir, 'login.html'));
});

module.exports = router;
