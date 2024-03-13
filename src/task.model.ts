// src/task.model.ts
/*Creating the task model:The "Task model" refers to a structured representation 
of data in your application that defines the attributes and behaviors of a task entity. 
In the context of a task management application, the Task model describes the properties 
that each task object will have and how they are structured.
*/
export interface Task {
    id: string;
    title: string;
    description: string;
    done: boolean;
  }
  
