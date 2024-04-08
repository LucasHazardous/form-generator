import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThingComponent } from './form-thing.component';

describe('FormThingComponent', () => {
  let component: FormThingComponent;
  let fixture: ComponentFixture<FormThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormThingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
