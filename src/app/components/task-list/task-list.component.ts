import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/task.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TaskService);

  setFilter(filter: 'all' | 'done' | 'todo') {
    this.taskService.setFilter(filter);
  }

  trackById(index: number, task: any) {
    return task.id;
  }
}
