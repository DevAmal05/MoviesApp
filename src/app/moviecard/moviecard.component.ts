import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {
@Input() id;
@Input() title;
@Input() image;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToMovieDetails() {
    this.router.navigateByUrl('/movie/'+this.id);
  }

}
