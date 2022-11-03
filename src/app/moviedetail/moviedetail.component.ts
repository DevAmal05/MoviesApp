import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
movie=null
  constructor(private movieservice:MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.makeCall();
  }

  makeCall() {
    const id=this.route.snapshot.params.id;
    this.movieservice.findMovieById(id).toPromise().then((res:any)=>{
      console.log(res);
      this.movie=res.data.movie
    }).catch((err)=>{

    })

  }

}
