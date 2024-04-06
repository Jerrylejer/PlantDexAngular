import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnePlantComponent } from './page-one-plant.component';

describe('PageOnePlantComponent', () => {
  let component: PageOnePlantComponent;
  let fixture: ComponentFixture<PageOnePlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageOnePlantComponent]
    });
    fixture = TestBed.createComponent(PageOnePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
