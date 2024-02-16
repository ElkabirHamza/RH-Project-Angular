import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencepageComponent } from './absencepage.component';

describe('AbsencepageComponent', () => {
  let component: AbsencepageComponent;
  let fixture: ComponentFixture<AbsencepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbsencepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsencepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
