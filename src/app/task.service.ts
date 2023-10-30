import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private arregloTareas = [
    {id: 1, nombre: 'Limpieza', completado: false},
    {id: 2, nombre: 'Recoger', completado: false},
    {id: 3, nombre: 'Cenar', completado: false},
  ];

  constructor() { }

  //Devuelve las tareas del arreglo
  getTasks() {
    return this.arregloTareas;
  }


  removeTask(id:number): void {
    this.arregloTareas = this.arregloTareas.filter(task => task.id !== id);
    console.log(this.arregloTareas)
  }
  agregarTarea(nuevaTarea: { id: number, nombre: string, completado: boolean }) {
    this.arregloTareas.push(nuevaTarea);

  }

}


