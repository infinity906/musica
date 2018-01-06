import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://orangevalleycaa.org/api/music"
@Injectable()
export class MusicProvider {
  public favoriteSongs = [];

  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic(){
    return this.http.get(API)
      .map(response => response.json())
  }
  getFavorites(){
    return this.favoriteSongs;
  }

  addtoFavorites(music){
    let IsSongAdded = this.favoriteSongs.findIndex((favoriteSongs)=>{
      console.log(IsSongAdded)
      return music.id === favoriteSongs
    });

    if (IsSongAdded === -1){
      this.favoriteSongs.push(music);
    }
  }
  getOneSong(){
    let oneSongUrl = API + "/qty/1"; //this URL gives only one object from the arrary of songs
    return this.http.get(oneSongUrl)
        .map(response => response.json())
  }

}
