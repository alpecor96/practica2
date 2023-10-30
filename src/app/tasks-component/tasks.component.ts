import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  tareas: any[] = [];
  nuevaTarea: string ='';
  tareaEliminada?: number;
  tareaAEliminar?: number;

  constructor( private taskService: TaskService) {
    this.tareas = taskService.getTasks();
  }

  removeTask() {
    if(this.tareaAEliminar){
      this.taskService.removeTask(this.tareaAEliminar);
      this.tareas = this.taskService.getTasks()
      this.tareaAEliminar = 0;
      ;
    }
  }

  agregarTarea(){
    if (this.nuevaTarea.trim() !== ''){
      const nuevaTarea = {
        id:  this.tareas.length + 1,
        nombre: this.nuevaTarea,
        completado: false
    };
    this.taskService.agregarTarea(nuevaTarea);
    }

    this.nuevaTarea = '';
    this.tareas = this.taskService.getTasks();
  }
}
