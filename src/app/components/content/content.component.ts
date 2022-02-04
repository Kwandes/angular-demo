import { Component, OnInit } from '@angular/core';
import { ITask, TaskStateEnum } from 'src/app/shared';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  username = 'Michael Hansen'; // mock it instead of hardcording
  pendingTasks = 1;
  tasks: ITask[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      error: (error) => {
        console.error(error);
      },
      next: (tasks: ITask[]) => {
        console.log('Tasks: ', tasks);
        this.tasks = tasks;
      },
    });
  }
}
