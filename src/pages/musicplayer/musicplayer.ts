import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from "@ionic-native/media"

/**
 * Generated class for the MusicplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-musicplayer',
  templateUrl: 'musicplayer.html',
})
export class MusicplayerPage {
  public music = {};
  private songMedia: MediaObject = null;
  private IsMusicPaused = false;

  constructor(private mediaPlugin: MediaPlugin, public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");
  }

  ionViewDidLoad() {

  }

  ionViewWillLeave(){
    this.stopMusic();
  }

  playMusic(){
    if (this.songMedia === null){
      this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
      this.songMedia.play();
    } else if (this.IsMusicPaused === true){
        this.songMedia.play();
        this.IsMusicPaused = false;
      }

  }
  pauseMusic(){
    if (this.songMedia !== null){
      this.songMedia.pause();
      this.IsMusicPaused = true;
    }


  }
  stopMusic(){
    if (this.songMedia !== null){
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null
    }


  }

}
