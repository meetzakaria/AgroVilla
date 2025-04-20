import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropGuidesComponent } from './crop-guides.component';

describe('CropGuidesComponent', () => {
  let component: CropGuidesComponent;
  let fixture: ComponentFixture<CropGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropGuidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
