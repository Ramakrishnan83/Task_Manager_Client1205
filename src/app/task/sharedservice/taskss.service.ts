import { Injectable } from '@angular/core';
import { Task } from './../model/Task';

@Injectable()
export class SharedService {
    public TaskModel: Task;
}