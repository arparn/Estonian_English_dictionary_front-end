import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEstonianComponent } from './delete-estonian.component';

describe('DeleteEstonianComponent', () => {
  let component: DeleteEstonianComponent;
  let fixture: ComponentFixture<DeleteEstonianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEstonianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEstonianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
