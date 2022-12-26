import { Component, Input } from '@angular/core';
import { todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

input_box:any;


todos : todo[]=[];


add(){

if(this.input_box){

let Todo = new todo();
Todo.name=this.input_box
Todo.isCompleted=true
this.todos.push(Todo);
this.input_box=''

}
else{
  alert("Please enter todo")
}


}

remove(id:any){

  this.todos=this.todos.filter((a,b) => b !== id);

}

}