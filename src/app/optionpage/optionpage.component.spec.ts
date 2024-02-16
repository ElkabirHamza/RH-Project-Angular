import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionpageComponent } from './optionpage.component';

describe('OptionpageComponent', () => {
  let component: OptionpageComponent;
  let fixture: ComponentFixture<OptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
