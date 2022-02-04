import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'src/app/shared';
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
export class ContentComponent implements OnChanges {
  username = 'Michael Hansen'; // mock it instead of hardcording
  pendingTasks = 1;
  @Input()
  tasks: ITask[] = [];

  filteredTasks: ITask[] = [];

  form = new FormGroup({
    filterTasksForm: new FormControl('', Validators.required),
  });

  constructor(public taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredTasks = this.tasks;
  }

  /**
   * Filter the tasks by a given state and assign them to a variable
   * @param event select option change event
   */
  filterTasks(event: any): void {
    this,
      (this.filteredTasks = this.taskService.filterTasksBy(
        event.target.value,
        this.tasks
      ));
  }
}
