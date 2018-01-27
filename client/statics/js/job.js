$(document).ready(() => {
var Job = new Object();

Job.Model = Backbone.Model.extend({
  default : {
    state : '',
    datum : '',
    job : '',
    ort : '',
    info : ''
  }
});

Job.Collection = Backbone.Collection.extend({
  model : Job.Model,
  url : '/api/job',
  initialize : function() {
    this.fetch();
  }
});

Job.TableView = Backbone.View.extend({
  el : '#job-list',
  initialize: function(){
    this.listenTo(job.collection, 'add', this.onModelAdd);
    this.listenTo(job.collection, 'remove', this.onModelRemove);
    this.render();
  },
  render: function () {
    var source = $('#template-job-list').html();
    var template = Handlebars.compile(source);
    var html = template(job.collection.toJSON());
    this.$el.html(html);
  },
  onModelAdd : function() {
    this.render();
  },
  onModelRemove : function() {
    this.render();
  }
});

var job = new Object();

job.collection = new Job.Collection();
job.tableView = new Job.TableView();
});
