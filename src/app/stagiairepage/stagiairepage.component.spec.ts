import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairepageComponent } from './stagiairepage.component';

describe('StagiairepageComponent', () => {
  let component: StagiairepageComponent;
  let fixture: ComponentFixture<StagiairepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StagiairepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagiairepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
