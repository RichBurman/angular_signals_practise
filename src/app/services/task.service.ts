import { computed, Injectable, signal } from "@angular/core";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    // Signal to hold the list of tasks Task[] means "an array of Task objects". The [] is TypeScript syntax for “array of this type”. Initially, it’s empty: [].

    private _tasks = signal<Task[]>([]);
    private _filter = signal<'all' | 'done' | 'todo'>('all');

    // Computed signal: a read-only view of the tasks for components
    readonly tasks = computed(() => {
        const filter = this._filter();
        const allTasks = this._tasks();

        if (filter === 'done') return allTasks.filter(t => t.done);
        if (filter === 'todo') return allTasks.filter(t => !t.done);
        return allTasks;
    });

    readonly filter = computed(() => this._filter());

    // Method to set the current filter
    setFilter(newFilter: 'all' | 'done' | 'todo') {
        this._filter.set(newFilter);
    }

    // Method to add a new task
    addTask(title: string) {
        const newTask: Task = {
            id: Date.now(), // Simple unique ID based on timestamp
            title,
            done: false
        };
        // Add new task to array (without mutating the original array)
        this._tasks.update(tasks => [...tasks, newTask]);
    }

    // Method to toggle the 'done' status of a task by ID
    toggleTask(id: number) {
        this._tasks.update(tasks =>
            tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
        );
    }

    // Method to delete a task by ID
    deleteTask(id: number) {
        this._tasks.update(tasks => tasks.filter(t => t.id !== id));
    }
}

