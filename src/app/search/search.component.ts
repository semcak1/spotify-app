import { Component, OnInit } from '@angular/core';
import { ArtistModule } from '../models/artist/artist.module';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
  artists: ArtistModule[] ;
  loading: boolean;

  

  searchMusic(name: string) {
    console.log(name);
    
    this.loading = true;
    this.spotifyService.getArtistas( name )
          .subscribe( (data: any) => {
            console.log(data);
            this.artists = data;
            this.loading = false;
          });
  }
  
  
}
