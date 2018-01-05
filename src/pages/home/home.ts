import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic = [];

  constructor(private loadingController: LoadingController, private musicProvider: MusicProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    let allMusicloadingController = this.loadingController.create({
      content: "Getting you content from server"
    });
    allMusicloadingController.present();
    this.musicProvider.getMusic()
    .subscribe((musiclist) => {
      allMusicloadingController.dismiss();
      this.allMusic = musiclist
    });
  }

addOneSong(refresher){
  this.musicProvider.getOneSong()
  .subscribe(oneSong => {
    this.allMusic.unshift(oneSong[0]);
    refresher.complete();
  });
}
}
