import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { UpdateComponent } from './update.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { query } from '@angular/core/src/render3';
import { Task } from '../model/Task';
import { DatePipe } from '@angular/common';


describe('UpdateComponent', () => {
  let specObj: any = {};
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule,HttpClientModule,RouterTestingModule ],
      declarations: [ UpdateComponent ],
      providers: [  NgbModal,DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    specObj.task = {task:"Ram",priority:0}  ;//Ram: not clear how to set this object and pass the input.
    specObj.fixture = TestBed.createComponent(UpdateComponent);
    specObj.component = specObj.fixture.componentInstance;
    specObj.fixture.detectChanges();
  });

  it('should create', () => {
    expect(specObj.component).toBeTruthy();
  });

    /*it('task name cannot be empty',() => {
    let addTaskButton = specObj.fixture.debugElement.query(By.css('#add-task')).nativeElement;
    addTaskButton.click();
    expect(specObj.task.task).toBeTruthy()});

    it('priorty should be greater than 0', () => {
      let addTaskButton = specObj.fixture.debugElement.query(By.css('#add-task')).nativeElement;
      addTaskButton.click();
      expect(specObj.task.priorty).toBeGreaterThan(0);
    });
  
    it('priorty should be less than or equal to 30', () => {
      let addTaskButton = specObj.fixture.debugElement.query(By.css('#add-task')).nativeElement;
      addTaskButton.click();
      expect(specObj.task.priorty).toBeLessThanOrEqual(30);
    });
  
    it('start date should not be empty', () => {
      let addTaskButton = specObj.fixture.debugElement.query(By.css('#add-task')).nativeElement;
      addTaskButton.click();
      expect(specObj.task.fromDate).toBeTruthy();
    });
  
    it('end date should not be empty', () => {
      let addTaskButton = specObj.fixture.debugElement.query(By.css('#add-task')).nativeElement;
      addTaskButton.click();
      expect(specObj.task.toDate).toBeTruthy();
    });*/
});
