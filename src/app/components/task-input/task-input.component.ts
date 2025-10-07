import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
taskTitle = '';

private taskService = inject(TaskService);

addTask() {
  if (this.taskTitle.trim()) {
    this.taskService.addTask(this.taskTitle.trim());
    this.taskTitle = '';
  }
}
}
