import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AddComponent } from './add.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { query } from '@angular/core/src/render3';
import { Task } from '../model/Task';


describe('AddComponent', () => {
  let task: Task = new Task();
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule,HttpClientModule,RouterTestingModule ],
      declarations: [ AddComponent ],
      providers: [  NgbModal,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    /*it('task name cannot be empty',() => {
      
    let addTaskButton = fixture.nativeElement.querySelector('#add-task');
  
    addTaskButton.click();
    expect(task.task).toBeTruthy()});

    it('priorty should be greater than 0', () => {
      
      let addTaskButton = fixture.nativeElement.querySelector('#add-task');
      addTaskButton.click();
      expect(task.Priority).toBeGreaterThan(0);
    });
  */
    /*it('priorty should be less than or equal to 30', () => {
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
