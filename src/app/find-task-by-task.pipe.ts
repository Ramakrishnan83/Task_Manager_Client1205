import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../app/task/model/Task';
import { provideForRootGuard } from '@angular/router/src/router_module';


@Pipe({
  name: 'filterbyTask'
})

export class FindTaskByTaskPipe implements PipeTransform  {
  transform(tasks: any[],
            taskName: string,
            priFrom: number,
            priTo: number ,
            searchParent: string,
            searchStartdate: any,
            searchEnddate: any
    ): any {
  
    if (!tasks) return [];

    let parenttaskid;
    let startdate:any;
    let enddate:any;
    let strStartDate:string;
    let strEndDate:string;
    let dbFromdate:any ;
    let dbEnddate:any ;
  

    //convert the date to DB format
    //stringDate1 = new Date(`${searchStartdate.date.month}/${searchStartdate.date.day}/${searchStartdate.date.year}`);
    //console.log (stringDate1);
    //stringDate2 =  new Date(Date.UTC(searchStartdate.date.year, searchStartdate.date.month - 1, searchStartdate.date.day));
    //console.log (stringDate2);
    //stringDate3 = `${searchStartdate.date.month}/${searchStartdate.date.day}/${searchStartdate.date.year}`;
    //console.log (stringDate3);
    //stringDate4 =  `${searchStartdate.getMonth() + 1}/${searchStartdate.getDate()}/${searchStartdate.getFullYear()}`;
    //console.log (stringDate4);
    

    //Get the task id of the search parent
    for (let i=0;i<tasks.length;i++){
      if (tasks[i].task.toLowerCase() == searchParent.toLowerCase()){
        parenttaskid=tasks[i]._id;
      }
    }
    
  
    return tasks.filter( it => {
   
    
    dbFromdate = this.dateconversion(it.start_date);
    dbEnddate = this.dateconversion(it.End_Date);
   
    //if (priFrom || priTo  || taskName || searchParent || strStartDate || strEndDate)
    //{     
      //console.log('entering into filter');
    if (priFrom || priTo) 
    {
      if (( it.Priority < priFrom) || (it.Priority > priTo)) {
          return false;
      } 
    } 
      console.log('entering into filter1');
    if (taskName && it.task.toLowerCase().indexOf(taskName.toLowerCase()) === -1) 
    {
      return false;
    }
    console.log('entering into filter2');
      //next condition
    if (searchParent && it.parent != parenttaskid)
    {
      return false;
    }

      //next condition
      //console.log(dbdate.indexOf(stringDate5));
      console.log('entering into filter3');
      
      
     
      if (searchStartdate)
     {
      console.log(dbFromdate);
      strStartDate = `${searchStartdate.year}/${searchStartdate.month}/${searchStartdate.day}`;
      console.log(searchStartdate);
      console.log(dbFromdate.indexOf(strStartDate));
      if (dbFromdate.indexOf(strStartDate) === -1 ){
          return false;
      }
     }
    
     //|| (strEndDate && dbEnddate.indexOf(strEndDate) === -1 )

      return true;

    } )
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
      let x = {year: this.toInteger(dateParts[0]), 
              month: this.toInteger(dateParts[1]), 
              day: this.toInteger(dateParts[2])};
      return (`${x.year}/${x.month}/${x.day}`);
  }   
  return null;
}

}
