import { Component, OnInit,Input } from '@angular/core';
import { Task } from './../model/Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { DatePipe } from '@angular/common';
//import { NgbDateFRParserFormatter} from '../../convert-date.pipe'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  task: Task = new Task();
  parents: {id:string,task:string}[];
  search:any;
  formatter:any;
  displayerr:boolean;
  errmsg:string;

  starting_date:any = {};
  ending_date:any = {};
  selectedParent: {_id:string, task:string};
  mydate;
  datestring:any;

  constructor(private taskService: TaskService,private router: Router,public datepipe: DatePipe) {
   }
  
  ngOnInit() {
    this.ngBootstrapTypeahead();
    this.findAllTasks();
    this.displayerr = false;
    this.errmsg = '';
    this.task.task = this.taskService.task;
    this.task._id = this.taskService._id;
    this.task.Priority = this.taskService.Priority;
    this.task.parent=this.taskService.parent;
    this.starting_date = this.taskService.start_date ;
    this.ending_date = this.taskService.End_Date;
    this.task.End_Date = this.starting_date;
    this.task.start_date = this.ending_date;
    this.findTaskbyID(this.taskService.parent);
    this.starting_date = this.dateconversion(this.starting_date);
    this.ending_date = this.dateconversion(this.ending_date);
  }


  ngBootstrapTypeahead(){
    this.search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
      : this.parents.filter(parent => parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
    
    this.formatter = (x: {task: string}) => {

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

  cancelTask(){
    this.router.navigate(['/', 'view']);
  }

 isNumber(value: any): boolean {
    return !isNaN(this.toInteger(value));
}

 toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

  dateconversion(value:any){
      if (value) {
          const dateParts = value.trim().split('-');
          return {year: this.toInteger(dateParts[0]), 
                  month: this.toInteger(dateParts[1]), 
                  day: this.toInteger(dateParts[2])};
      }   
      return null;
  }



  findTaskbyID(taskid:string){
    this.taskService.getTask(taskid)
    .subscribe((res: any)=>{
       console.log(res);
      if(res.success == true){
        this.selectedParent = res.data;
      } else {
        // console.log("error in finding all tasks");
      }
    })
  }
  updateTask(){
    this.displayerr=false;
    this.task.End_Date = new Date(`${this.ending_date.year}/${this.ending_date.month}/${this.ending_date.day}`);
    this.task.start_date = new Date(`${this.starting_date.year}/${this.starting_date.month}/${this.starting_date.day}`);

    if (this.task.task === ''){
      this.displayerr=true;
      this.errmsg="Please enter the task name"; 
      return;
    }
    
    if (this.task.Priority === 0){
      this.displayerr=true;
      this.errmsg="Please select priority greater than 0"; 
      return;
    }

    if (Object.keys(this.starting_date).length === 0)
    {
        this.displayerr=true;
        this.errmsg="Please select Start Date"; 
        return;
    }
   
    if (Object.keys(this.ending_date).length === 0)
    {
        this.displayerr=true;
        this.errmsg="Please select End Date"; 
        return;
    }
     //Add validation for start date and end date to be selected.
    
    if (this.task.start_date && this.task.End_Date){

      if (this.task.start_date > this.task.End_Date){
        this.displayerr=true;
        this.errmsg="End date should be greater than start date"; 
        return;
      }
    }

    if(!!this.selectedParent){
      this.task.parent = this.selectedParent._id;
    }

    if(!this.displayerr){
    this.taskService.updateTask(this.task._id,this.task)
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

  }
}
