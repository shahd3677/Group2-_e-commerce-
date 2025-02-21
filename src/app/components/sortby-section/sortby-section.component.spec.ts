import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbySectionComponent } from './sortby-section.component';

describe('SortbySectionComponent', () => {
  let component: SortbySectionComponent;
  let fixture: ComponentFixture<SortbySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortbySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
