import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.route';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './task/add/add.component';
import { ViewComponent } from './task/view/view.component';
import { UpdateComponent } from './task/update/update.component';
import { FindTaskByIdPipe } from './find-task-by-id.pipe';
import { FindTaskByTaskPipe } from './find-task-by-task.pipe';
import { DatePipe } from '@angular/common';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from "./convert-date.pipe"



@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, routing, HttpClientModule, NgbModule
  ],
  //providers: [DatePipe,{provide: NgbDateParserFormatter,],
  providers: [DatePipe,{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}],
  declarations: [AppComponent, HeaderComponent, AddComponent, ViewComponent, UpdateComponent, FindTaskByIdPipe,FindTaskByTaskPipe],
  bootstrap:[AppComponent]
})
export class AppModule { }
