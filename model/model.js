const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../', 'data', 'todoData.json');

class Todo{
    constructor(id, description, target){
        this.id = id;
        this.description = description;
        this.target = target;
    }

    addTodo(){
        fs.readFile(p, (err, data)=>{
            var todos = [];
            if(!err){
                todos = JSON.parse(data);
            }
            todos.push(this);
            fs.writeFile(p, JSON.stringify(todos), (err)=>{
                console.log(err);
            })
        });
    }

    updateTodo(){
        fs.readFile(p, (err, data)=>{
            let todos = JSON.parse(data);
            let idx = todos.findIndex(todo => todo.id === this.id);
            todos[idx].description = this.description;
            todos[idx].target = this.target;
            fs.writeFile(p, JSON.stringify(todos), (err)=>{
                console.log(err);
            })
        });
    }

    static featchAll(cb){
        fs.readFile(p, (err, data)=>{
            if(err){
                return cb([]);
            }
            return cb(JSON.parse(data));
        })
    }

    static getById(id, cb){
        fs.readFile(p, (err, data)=>{
            const todos = JSON.parse(data);
            let inx = todos.findIndex(todo => todo.id === id);
            return cb(todos[inx]);
        });
    }

    static deleteById(id, cb){
        fs.readFile(p,(err, data)=>{
            const todos = JSON.parse(data);
            let inx = todos.findIndex(todo => todo.id === id);
            if(inx > -1){
                todos.splice(inx, 1);
            }
            fs.writeFile(p, JSON.stringify(todos), (err)=>{
                console.log(err);
                cb();
            });
        });
    }
}

module.exports = Todo;