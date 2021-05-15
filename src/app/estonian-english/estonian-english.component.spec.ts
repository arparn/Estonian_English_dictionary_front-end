import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstonianEnglishComponent } from './estonian-english.component';

describe('EstonianEnglishComponent', () => {
  let component: EstonianEnglishComponent;
  let fixture: ComponentFixture<EstonianEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstonianEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstonianEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
