import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolezComponent } from './rolez.component';

describe('RolezComponent', () => {
  let component: RolezComponent;
  let fixture: ComponentFixture<RolezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
