import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatCardModule, MatInputModule],
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
