import { TaskStateEnum } from '../enums';

export interface ITask {
  id: string;
  state: TaskStateEnum;
  questionContent?: string;
  questionSentAt?: string;
  answerContent?: string;
  answerSentAt?: string;
  unlockedAt?: string;
}
