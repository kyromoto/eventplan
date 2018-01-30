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
  /* Toggle active page */
  $('.eventplan-page-wrapper').removeClass('active');
  $('#page-' + pageName).addClass('active');


  $('.eventplan-navpoint').removeClass('active');
  $('.eventplan-navpoint.navpoint-' + pageName).addClass('active');
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
