//Task service for CRUD operations

import { Injectable } from '@nestjs/common';
import { Task } from 'src/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      done: false,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, title: string, description: string): Task {
    const task = this.getTaskById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.title = title;
    task.description = description;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
