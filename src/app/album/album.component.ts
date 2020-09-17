import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  id:string;  
  album:any;  


  constructor(private spotifyService:SpotifyService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params)
      this.id=params.get('id');
      this.spotifyService.getAlbum(this.id)
      .subscribe(res=>{
        this.album=res
        console.log(res)
      })
      
    })
  }

}
