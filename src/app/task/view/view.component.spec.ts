import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewComponent } from './view.component';
import { FindTaskByTaskPipe } from '../../find-task-by-task.pipe';
import { FindTaskByIdPipe } from '../../find-task-by-id.pipe';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { query } from '@angular/core/src/render3';
import { Task } from '../model/Task';
import { DatePipe } from '@angular/common';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule,HttpClientModule,RouterTestingModule ],
      declarations: [ ViewComponent,FindTaskByTaskPipe,FindTaskByIdPipe ],
      providers: [  NgbModal,DatePipe,FindTaskByTaskPipe,FindTaskByIdPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
