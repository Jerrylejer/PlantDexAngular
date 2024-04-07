import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminModifPlantComponent } from './page-admin-modif-plant.component';

describe('PageAdminModifPlantComponent', () => {
  let component: PageAdminModifPlantComponent;
  let fixture: ComponentFixture<PageAdminModifPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdminModifPlantComponent]
    });
    fixture = TestBed.createComponent(PageAdminModifPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
