import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GularComponent } from './gular.component';

describe('GularComponent', () => {
  let component: GularComponent;
  let fixture: ComponentFixture<GularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
