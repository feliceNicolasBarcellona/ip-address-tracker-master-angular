import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordsDetailsComponent } from './coords-details.component';

describe('CoordsDetailsComponent', () => {
  let component: CoordsDetailsComponent;
  let fixture: ComponentFixture<CoordsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordsDetailsComponent]
    });
    fixture = TestBed.createComponent(CoordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
