import { Component } from "angular2/core";
import { Todo } from "./to-do";
import { TodoService } from "./to-do.service";

@Component({
  selector: 'to-do',
  templateUrl: 'app/ts/to-do/to-do.component.html',
  styleUrls: [ 'app/ts/to-do/to-do.component.scss' ],
  providers: [ TodoService ]
})

export class ToDoComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }


}
