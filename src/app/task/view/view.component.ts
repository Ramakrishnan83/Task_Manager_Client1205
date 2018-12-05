import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/Task';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  tasks:Task[];
  searchText:string;
  searchParent:string;
  mydate;
  searchPrioFrom:number;
  searchPrioTo:number;
  parents:{_id:string, task:string}[];
  selectedParent:{_id:string, task:string} = null;
  search:any;
  formatter:any;
  
  //create a object to store the selected task
   constructor(private taskService:TaskService,private router: Router,public datepipe: DatePipe) { }

  ngOnInit() {
    this.ngBootstrapTypeahead()
    this.findAllTasks()
    //this.searchPrioFrom = 0;
    //this.searchPrioTo = 30;
    this.searchText='';
    this.searchParent='';
  }

  editTask(task1:Task)
  {
    //this.taskService.TaskModel.task=task1.task;
    this.taskService._id=task1._id;
    this.taskService.task=task1.task;
    this.taskService.parent=task1.parent;
    this.taskService.Priority=task1.Priority;
    this.taskService.start_date= task1.start_date;

    //this.taskService.start_date='2014-01-25';
    console.log("inside view component");
    console.log(task1.start_date);
    console.log ("exepted output");
    this.taskService.End_Date=task1.End_Date;
    this.taskService.Finished=task1.Finished;
    this.router.navigate(['/', 'update']);
  }
  endTask(task1:Task)
  {
    task1.Finished=true;
    this.taskService.updateTask(task1._id,task1)
    .subscribe((res: any)=>{
      // console.log(res);
      if(res.success == true){
        // console.log('valid')
        this.router.navigate(['/', 'view']);
      } else {
        alert('Invalid user');
      }
    })

  }

  ngBootstrapTypeahead(){
    this.search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
      : this.parents.filter(parent => parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
    
    this.formatter = (x: {task: string}) => {
      // // console.log(x);
      return x.task;
    };  
    
  }

  findAllTasks(){
    this.taskService.getAllTasks()
    .subscribe((res: any)=>{
      console.log(res);
      if(res.success == true){
        this.tasks = res.data;
        this.parents = res.data;
      } else {
        console.log("Could not find all tasks");
      }
    })
  }

  dateconversion(x:any){
    this.mydate= new Date(x);
    let latest_date = this.datepipe.transform(this.mydate,'yyyy-MM-dd');
    return latest_date;
  }


}
