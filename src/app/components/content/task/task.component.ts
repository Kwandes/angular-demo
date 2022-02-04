import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ITask, TaskStateEnum } from 'src/app/shared';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  task!: ITask;

  @HostBinding('style.background-color')
  backgroundColor = '#3D4641';

  @HostBinding('style.color')
  textColor = '#4A4A4A';

  @HostBinding('style.box-shadow')
  boxShadow = 'none';

  constructor() {}

  ngOnInit(): void {
    console.log('Task is being rendered', this.task);

    this.setTaskColor();
  }

  /**
   * returns a image uri based on the task state
   */
  getTaskImage(): string {
    switch (this.task.state) {
      case TaskStateEnum.ASK: {
        return 'unlocked-ask-question.svg';
      }
      case TaskStateEnum.ANSWER: {
        return 'answer-question.svg';
      }
      case TaskStateEnum.ASKED: {
        return 'ask-question-grey.svg';
      }
      case TaskStateEnum.ANSWERED: {
        return 'answer-question-grey.svg';
      }
      default: {
        return 'locked-ask-question.svg';
      }
    }
  }

  /**
   * returns a task action text based on the task state
   */
  getTaskText(): string {
    switch (this.task.state) {
      case TaskStateEnum.ASK: {
        return 'Ask a question';
      }
      case TaskStateEnum.ANSWER: {
        return 'Answer a question';
      }
      case TaskStateEnum.ASKED: {
        return 'You asked a question';
      }
      case TaskStateEnum.ANSWERED: {
        return 'You answered a question';
      }
      default: {
        return 'Ask a question';
      }
    }
  }

  /**
   * sets task action test and background colors based on the task state
   */
  setTaskColor(): void {
    switch (this.task.state) {
      case TaskStateEnum.ASK: {
        this.textColor = '#4A4A4A';
        this.backgroundColor = '#FFFFFF';
        this.boxShadow = 'box-shadow: 15px 15px 44px rgba(61, 70, 65, 0.15);';
        break;
      }
      case TaskStateEnum.ANSWER: {
        this.textColor = '#4A4A4A';
        this.backgroundColor = '#FFFFFF';
        this.boxShadow = 'box-shadow: 15px 15px 44px rgba(61, 70, 65, 0.15);';
        break;
      }
      case TaskStateEnum.ASKED: {
        this.textColor = '#4A4A4A';
        this.backgroundColor = '#F6F6F3';
        this.boxShadow = 'none';
        break;
      }
      case TaskStateEnum.ANSWERED: {
        this.textColor = '#4A4A4A';
        this.backgroundColor = '#F6F6F3';
        this.boxShadow = 'none';
        break;
      }
      default: {
        this.textColor = '#F2EEE1';
        this.backgroundColor = '#3D4641';
        this.boxShadow = 'none';
        break;
      }
    }
  }
}
