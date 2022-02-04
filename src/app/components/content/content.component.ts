import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask, TaskStateEnum } from 'src/app/shared';
import { TaskService } from 'src/app/shared/services/task.service';

enum TaskFilterOptions {
  ALL_TASKS = 'All Tasks',
  LOCKED = 'Locked',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  username = 'Michael Hansen'; // mock it instead of hardcording
  pendingTasks = 1;
  tasks: ITask[] = [];
  filteredTasks: ITask[] = [];

  form = new FormGroup({
    filterTasksForm: new FormControl('', Validators.required),
  });

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      error: (error) => {
        console.error(error);
      },
      next: (tasks: ITask[]) => {
        console.log('Tasks: ', tasks);
        this.tasks = tasks;
        this.filteredTasks = tasks;
      },
    });
  }

  /**
   * Filter the tasks by a given state and assign them to a variable
   * @param event select option change event
   */
  filterTasks(event: any): void {
    this, (this.filteredTasks = this.filterTasksBy(event.target.value));
  }

  /**
   * Filter the tasks by a given state and return a list
   * @param filter select state option
   * @returns filtered tasks
   */
  filterTasksBy(filter: string): ITask[] {
    // TODO - convert the cases to an enum
    switch (filter) {
      case 'ALL_TASKS':
        return this.tasks;
      case 'LOCKED':
        return this.tasks.filter(
          (task: ITask) => task.state === TaskStateEnum.LOCKED
        );
      case 'PENDING':
        return this.tasks.filter(
          (task) =>
            task.state === TaskStateEnum.ANSWER ||
            task.state === TaskStateEnum.ASK
        );
      case 'COMPLETED':
        return this.tasks.filter(
          (task) =>
            task.state === TaskStateEnum.ANSWERED ||
            task.state === TaskStateEnum.ASKED
        );
      default:
        return [];
    }
  }
}
