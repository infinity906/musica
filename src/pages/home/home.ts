import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music"
import { SocialSharing } from '@ionic-native/social-sharing'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic = [];

  constructor(private socialSharing:SocialSharing, private actionSheetController: ActionSheetController, private loadingController: LoadingController, private musicProvider: MusicProvider, public navCtrl: NavController) {

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
shareSong(music){
  let shareSongActionSheet = this.actionSheetController.create({
    title: "Share songs with friends",
    buttons: [
      {
        text: "Share on facebook",
        icon: "logo-facebook",
        handler: ()=>{
          this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
        }
      },
      {
        text: "Share on twitter",
        icon: "logo-twitter",
        handler: ()=>{
          this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
        }
      },
      {
        text: "Share",
        icon: "share",
        handler: ()=> {
          this.socialSharing.share(music.name, "", music.image, music.image_url);
        }
      },
      {
        text:"cancel",
        role: "desructive"
      }
    ]
  });
  shareSongActionSheet.present();
}
}
