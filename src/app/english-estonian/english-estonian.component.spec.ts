import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishEstonianComponent } from './english-estonian.component';

describe('EnglishEstonianComponent', () => {
  let component: EnglishEstonianComponent;
  let fixture: ComponentFixture<EnglishEstonianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishEstonianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishEstonianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
