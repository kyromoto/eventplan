$(document).ready(() => {
var stateman = new StateMan();

var config = {
  'html5' : true,
  'root' : '/app'
}

var stateConfig = {}

var updateGui = function(name) {
  var pageName = name.replace('.', '-');
  console.log("current: " + pageName);
  $('.page-wrapper').removeClass('active');
  $('#page-' + pageName).addClass('active');
  $('.nav.nav-tabs li.nav-item a.nav-link').removeClass('active');
  $('.nav.nav-tabs li.nav-item a.nav-link.' + pageName).addClass('active');
}

var states = {
  "job" : stateConfig,
  "job.new" : stateConfig,
  "job.edit" : stateConfig
}

stateman
  .state(states)
  .on('begin', (event) => updateGui(event.current.name))
  .on('notfound', function() {
    this.go('job');
  })
  .start(config);
});
