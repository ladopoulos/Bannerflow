import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerformComponent } from './bannerform.component';

describe('BannerformComponent', () => {
  let component: BannerformComponent;
  let fixture: ComponentFixture<BannerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
