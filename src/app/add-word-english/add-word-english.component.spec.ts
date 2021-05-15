import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordEnglishComponent } from './add-word-english.component';

describe('AddWordEnglishComponent', () => {
  let component: AddWordEnglishComponent;
  let fixture: ComponentFixture<AddWordEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
