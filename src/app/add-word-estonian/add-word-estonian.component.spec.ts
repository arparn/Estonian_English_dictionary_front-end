import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordEstonianComponent } from './add-word-estonian.component';

describe('AddWordEstonianComponent', () => {
  let component: AddWordEstonianComponent;
  let fixture: ComponentFixture<AddWordEstonianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordEstonianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordEstonianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
