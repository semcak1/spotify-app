import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumModule } from '../models/album/album.module';
import { ArtistModule } from '../models/artist/artist.module';
import { SpotifyService } from '../services/spotify.service';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:any;
  albums:any;  
  loadingArtist: boolean;

  constructor(private spotifyService:SpotifyService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.loadingArtist = true;
    this.route.paramMap.subscribe(params=>{
     
      this.id=params.get('id');          
      this.spotifyService.getArtist(this.id)
      .subscribe(res=>{
        this.artist=res             
      })
      this.spotifyService.getAlbums(this.id)
      .subscribe(albums=>{
        this.albums=albums["items"];
        console.log(albums);
      })
    })    
  }

  

}
