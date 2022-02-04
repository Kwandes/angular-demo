import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '..';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('assets/mocks/tasks.json');
  }
}
