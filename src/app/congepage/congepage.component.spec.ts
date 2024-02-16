import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongepageComponent } from './congepage.component';

describe('CongepageComponent', () => {
  let component: CongepageComponent;
  let fixture: ComponentFixture<CongepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
