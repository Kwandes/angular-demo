import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask, TaskStateEnum } from '..';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  /**
   * Get an array of tasks from the mock located in the assets
   * @returns an array of tasks
   */
  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('assets/mocks/tasks.json');
  }

  /**
   * Filter the tasks by a given state and return a list
   * @param filter select state option
   * @returns filtered tasks
   */
  filterTasksBy(filter: string, tasks: ITask[]): ITask[] {
    // TODO - convert the cases to an enum
    switch (filter) {
      case 'ALL_TASKS':
        return tasks;
      case 'LOCKED':
        return tasks.filter(
          (task: ITask) => task.state === TaskStateEnum.LOCKED
        );
      case 'PENDING':
        return tasks.filter(
          (task) =>
            task.state === TaskStateEnum.ANSWER ||
            task.state === TaskStateEnum.ASK
        );
      case 'COMPLETED':
        return tasks.filter(
          (task) =>
            task.state === TaskStateEnum.ANSWERED ||
            task.state === TaskStateEnum.ASKED
        );
      default:
        return [];
    }
  }
}
