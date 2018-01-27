var path = require('path');

var express = require('express');

var router  = express.Router();

var clientDir     = path.join(__dirname, 'statics'),
    jQueryDir     = path.join(__dirname, '..', 'node_modules', 'jquery', 'dist'),
    underscoreDir = path.join(__dirname, '..', 'node_modules', 'underscore'),
    backboneDir   = path.join(__dirname, '..', 'node_modules', 'backbone'),
    handlebarsDir = path.join(__dirname, '..', 'node_modules', 'handlebars', 'dist'),
    statemanDir   = path.join(__dirname, '..', 'node_modules', 'stateman'),
    bootstrapDir  = path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist'),
    lessDir       = path.join(__dirname, '..', 'node_modules', 'less', 'dist');

router.use('/client',         express.static(clientDir));
router.use('/lib/jquery',     express.static(jQueryDir));
router.use('/lib/underscore', express.static(underscoreDir));
router.use('/lib/backbone',   express.static(backboneDir));
router.use('/lib/handlebars', express.static(handlebarsDir));
router.use('/lib/stateman',   express.static(statemanDir));
router.use('/lib/bootstrap',  express.static(bootstrapDir));
router.use('/lib/less',       express.static(lessDir));

/*router.use('/', (req, res) => {
  res.redirect('/app');
});*/

router.use('/app', (req, res) => {
  res.sendFile(path.join(clientDir, 'app.html'));
});

router.use('/login', (req, res) => {
  res.sendFile(path.join(clientDir, 'login.html'));
});

module.exports = router;
