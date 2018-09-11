import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountriesComponent } from './allcountries.component';

describe('AllcountriesComponent', () => {
  let component: AllcountriesComponent;
  let fixture: ComponentFixture<AllcountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
