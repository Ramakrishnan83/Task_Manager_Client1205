import { Component, OnInit } from '@angular/core';
import { Task } from './../model/Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { isNullOrUndefined, isUndefined } from 'util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  task: Task = new Task();
  starting_date:any = {};
  ending_date:any = {};

  parents:{_id:string, task:string}[];

  search:any;
  formatter:any;
  displayerr:boolean;
  errmsg:string;

  selectedParent:{_id:string, task:string} = null;
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.ngBootstrapTypeahead();
    
    // find all the parent ids and tasks
    this.findAllTasks();
    this.task.task = '';
    this.displayerr=false;  
    this.clearerrmsg();
  
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
      // console.log(res);
      if(res.success == true){
        this.parents = res.data;
      } else {
        // console.log("error in finding all tasks");
      }
    })
  }

  changePriority(p){
    // console.log(p);
    this.task.Priority = p;
  }
  clearerrmsg(){
    this.errmsg='';
  }
  resetTask(){
   this.clearerrmsg();
   this.task.Priority = 0;
   this.task.task ='';
   this.task.parent = '';
   this.task.start_date=null;
   this.task.End_Date=null;
   this.ending_date={};
   this.starting_date={};
  }
  validateTask(){
    if (this.task.task === ''){
      this.displayerr=true;
      this.errmsg="Please enter the task name"; 
      return false;
    }
  
    if (this.task.Priority === 0){
      this.displayerr=true;
      this.errmsg="Please select priority greater than 0"; 
      return false;
    }

    if (Object.keys(this.starting_date).length === 0)
    {
        this.displayerr=true;
        this.errmsg="Please select Start Date"; 
        return false;
    }
   
    if (Object.keys(this.ending_date).length === 0)
    {
        this.displayerr=true;
        this.errmsg="Please select End Date"; 
        return false;
    }
     //Add validation for start date and end date to be selected.
    
    if (this.task.start_date && this.task.End_Date){

      if (this.task.start_date > this.task.End_Date){
        this.displayerr=true;
        this.errmsg="End date should be greater than start date"; 
        return false;
      }

    }
    return true;
  }

  addTask(){
    this.displayerr=false;
    this.clearerrmsg();
    this.task.End_Date = new Date(`${this.ending_date.year}/${this.ending_date.month}/${this.ending_date.day}`);
    this.task.start_date = new Date(`${this.starting_date.year}/${this.starting_date.month}/${this.starting_date.day}`);
    if(!!this.selectedParent){
      this.task.parent = this.selectedParent._id;
    }
      
    if (this.validateTask){
    this.taskService.createTask(this.task)
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
  else{
    console.log("failed validation");
  }

  }
}
