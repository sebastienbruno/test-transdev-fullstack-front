import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErrosComponent } from './list-erros.component';

describe('ListErrosComponent', () => {
  let component: ListErrosComponent;
  let fixture: ComponentFixture<ListErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
