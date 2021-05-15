import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnglishComponent } from './delete-english.component';

describe('DeleteEnglishComponent', () => {
  let component: DeleteEnglishComponent;
  let fixture: ComponentFixture<DeleteEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
