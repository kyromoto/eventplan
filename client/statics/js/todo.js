$(document).ready(function() {

  var Todo = Backbone.Model.extend({
    default : {
      todo : ''
    }
  });

  var TodoCollection = Backbone.Collection.extend({
    model : Todo,
    url : '/api/todo',
    initialize : function() {
      this.fetch();
    }
  });

  var TodoListView = Backbone.View.extend({
    el : '#content',
    initialize: function(){
      this.listenTo(todos, 'add', this.onModelAdd);
      this.listenTo(todos, 'remove', this.onModelRemove);
      this.render();
    },
    render: function () {
      var source = $('#todo-list-template').html();
      var template = Handlebars.compile(source);
      console.log(todos);
      var html = template(todos.toJSON());
      this.$el.html(html);
    },
    onModelAdd : function(model) {
      this.render();
    },
    onModelRemove : function(model) {
      this.render();
    }
  });

  var todos = new TodoCollection();
  var todoListview = new TodoListView();

  var api = new Object();
  api.todo = new Object();

  api.todo.create = (reqData, successCallback, errorCallback) => {
    $.ajax({
      url : '/api/todo',
      type : 'POST',
      data : reqData,
      success : function(data, status, xhr) {
        console.log("success" + status);
        successCallback(status, data);
      },
      error : function(xhr, status, error) {
        console.log("error " + status);
        errorCallback(status, error);
      }
    });
  }

  api.todo.delete = (id, successCallback, errorCallback) => {
    $.ajax({
      url : '/api/todo/' + id,
      type : 'DELETE',
      success : function(data, status, xhr) {
          console.log("success " + data);
          successCallback(status, data);
      },
      error : function(xhr, status, error) {
        console.log("error " + status);
        errorCallback(status, error);
      }
    });
  }

  var createTodoHandler = () => {
    api.todo.create(
      $("#add-todo-form").serialize(),
      (status, data) => {
          $('#add-todo-form-input').val('');
          todos.fetch();
      },
      (status, error) => {
          $('#add-todo-form-input').val('');
          todos.fetch();
      }
    );
  }

  var deleteTodoHandler = () => {
    var data = $('#todo-list-form').serializeArray();
    var dataLength = data.length;

    console.log("data:\n" + data);
    console.log("dataLength: " + dataLength);

    for (var i = 0; i < dataLength; i++) {
      var id = data[i].value;
      api.todo.delete(
        id,
        (status, data) => todos.fetch(),
        (status, error) => todos.fetch()
      );
    }
  }

  //EVENT-HANDLER press add button
  $('#add-todo-form-submit').click(() => createTodoHandler());

  //EVENT-HANDLER press enter on input
  $('#add-todo-form-input').keypress((e) => {
    if (e.which == 13) {
      createTodoHandler();
    }
  });

  //EVENT-HANDLER press delete button
  $('#button-delete-selected-todo').click(() => deleteTodoHandler());
});
