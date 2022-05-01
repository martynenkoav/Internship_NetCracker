import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyForCheckComponent } from './company-for-check.component';

describe('CompanyForCheckComponent', () => {
  let component: CompanyForCheckComponent;
  let fixture: ComponentFixture<CompanyForCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyForCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyForCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
