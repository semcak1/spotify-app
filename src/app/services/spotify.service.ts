import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private searchUrl:string;
  token:string="BQAttmy3VM_1Q5k95CSlQGAq0P0lEfPT-qJIoZFDYNsx4KggN9PjwJ5vlzLj1XsA3YxztGlqvjuXcYj49bvfiTDQ2P6a9dba7kDIKo0ZgxSgPgZPPqe8oKhPBj1CxkbQrp9my-wdnN4Hp4Gz_6zO_636K9XH96ejotqvTtin5VEIrzKMuJ_0BW7wU_50OHpxi0Ypqip9ZIiPNrL8afVi";

  artistIdToken:string="BQC-zmlO8zX4Dk2ZybINVMA6rFG03U3vtvwURJ67Y4qYfwUXN2REwow9TvB0bLTIZt5PNzvtXg2Boa3ehXZT8UhpIdw0umjwrrF08QimH94dr2IE-sT_Ty7U1xuFX_oqj_71jhrq-MTmWfXxcWrCH14he_S69Vh-X-QhKV9P0IqmCBvKgY1ANnTNtPyGrndYsaXfMjXDePzIzcX3X0o-";

  token2="BQBFaRgUkNRaVNHAVnmctLTDuXdcHfwpY4W_nWPcpFReud1A7yyQJbejiUahRoUUNM3o2x4MGvDrJahoEmnxUA2MdHAf9QhflZp0LN5LZ3UN6w9MTZ604PFCm6jWWXFAbv_p47l76ax9eEVtf3gneGponl1Sy1jMCgUAPSSD1kvRXxoIJidpBfZh4JeoRv3-iUiEcCs7ygUTRWL92Uif";

  token3="BQAHAtNs7GCOrXNMCEhvHBt17fM6fZfFef3lZ75SaYhl4bwO5geYlZvALCLIoVcNaCBZEllffFefTHk-LbC34NNAqVpFfYk1qmDTAoM1mZV9zJUw-WYu_FREjjhnJpv63hMAwAFyiecMbGifzTUnm8CX1jOLj4ynX9rsJet-LJjE_WsPqkrQC5-6nZk5rkOUJ96mLTNX9M8PCIyH1B1v"
  

  // ClientID:string="c1537114092f4c9c8dd09f74440ff283";
  // ClientSecret="c03832adc5a34ad381acc2f77a7bf325";
  // redirectUri:String='https%3A%2F%2Fdeveloper.spotify.com%2Fcallback%2F';
  

 
    

  constructor(private http:HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query} `;
// query can be
    
    const headers = new HttpHeaders({
      Authorization:
        "Bearer "+this.token3
    });

    return this.http.get(url, { headers });
  }

  getArtistas(query: string,type:string="artist",market:string="US") {
    return this.getQuery(`search?q=${query}&type=${type}&market=${market}`).pipe(
      map(data => data["artists"].items)
    );
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`).pipe(
      map(data => data)
    );
  }

  getAlbums(artistId:string){
    return this.getQuery(`artists/${artistId}/albums`).pipe(
      map(data => data)
    );
  }

  getAlbum(id:string){
    return this.getQuery(`albums/${id}`).pipe(
      map(data => data)
    );
  }

}
