const Todo = require('../model/model');

exports.todo = (req, res, next) =>{
    Todo.featchAll((todos)=>{
        res.render('index', {todos: todos});
    })
    
}

exports.addTodo = (req, res, next) => {
    res.render('addTodo');
}

exports.editTodo = (req, res, next) => {
    const id = req.query.id;
    const todo = Todo.getById(id, (todo) => {
        //console.log(todo);
        res.render('editTodo', {todo: todo});
    });

}

exports.postEditTodo = (req, res, next) => {
    let id = req.body.id;
    let description = req.body.description;
    let target = req.body.target;
    console.log(req.body);
    const todo = new Todo(id, description, target);
    todo.updateTodo();
    res.redirect('/');
}

exports.postTodo = (req, res, next)=>{
    
    var id = Math.random().toString();
    const todo = new Todo(id, req.body.description, req.body.target);
    todo.addTodo();
    //todos.push({id: id, description: req.body.description, target: req.body.target});
    res.redirect('/');
}

exports.deleteTodo = (req, res, next)=>{
    const id = req.params.id;
    console.log(id);
    Todo.deleteById(id, ()=>{
        res.redirect('/');
    });
    
}