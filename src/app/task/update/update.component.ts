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
          console.log(dateParts.length);
          console.log(dateParts[0]);
          console.log(dateParts[1]);
          console.log(dateParts[2]);
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
    
    // console.log(this.task);
    // console.log(this.selectedParent);
   

    this.task.End_Date = new Date(`${this.ending_date.year}/${this.ending_date.month}/${this.ending_date.day}`);
    this.task.start_date = new Date(`${this.starting_date.year}/${this.starting_date.month}/${this.starting_date.day}`);

    console.log(this.task.End_Date);

    /*var d = new Date('this.starting_date');
    d.setMinutes( d.getMinutes() + d.getTimezoneOffset() );
    console.log(" Our D value");
    console.log(d);

    console.log("after converting before saving to DB")
    console.log(this.starting_date);
    console.log("Before saving to DB");
    console.log(this.task.start_date);
    console.log(this.task.End_Date);*/


    if(!!this.selectedParent){
      this.task.parent = this.selectedParent._id;
    }

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
