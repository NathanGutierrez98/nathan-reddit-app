import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditPostNathanComponent } from './components/reddit-post-nathan/reddit-post-nathan.component';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RedditPostNathanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nathan-reddit-app';
}
