import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSectionComponent } from './best-section.component';

describe('BestSectionComponent', () => {
  let component: BestSectionComponent;
  let fixture: ComponentFixture<BestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
