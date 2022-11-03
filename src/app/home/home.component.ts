import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
movies:any[]=[];    
  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.getMoviesFromTheApi();
  }

  getMoviesFromTheApi() {
    this.movieservice.getMoviesList().toPromise().then((res:any)=>{
      this.movies=res.data.movies
      console.log(this.movies)

    })
  }

  searching(e){
    const query=e.target.value;
    this.movieservice.searchFor(query).toPromise().then((res:any)=>{
      if(res.data.movies){
this.movies=res.data.movies
      }
    })
  }

}
