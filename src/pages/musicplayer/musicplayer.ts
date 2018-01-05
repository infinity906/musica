import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");
  }

  ionViewDidLoad() {

  }

  playMusic(){

  }
  pauseMusic(){

  }
  stopMusic(){

  }

}
