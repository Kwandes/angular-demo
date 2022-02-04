import { Component } from '@angular/core';
import { ITask } from './shared';
import { TaskService } from './shared/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
  tasks: ITask[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      error: (error) => {
        console.error(error);
      },
      next: (tasks: ITask[]) => {
        this.tasks = tasks;
      },
    });
  }
}
