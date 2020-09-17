import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumModule } from '../album/album.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ArtistModule { 
  id:number;
  name:string;
  genres:any;
  albums:AlbumModule[];
}
