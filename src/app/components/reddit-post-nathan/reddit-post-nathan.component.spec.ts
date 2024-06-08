import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostNathanComponent } from './reddit-post-nathan.component';

describe('RedditPostNathanComponent', () => {
  let component: RedditPostNathanComponent;
  let fixture: ComponentFixture<RedditPostNathanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedditPostNathanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedditPostNathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
