import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
          {
            title: 'Welcome to Flowi',
            description: 'Flowi is the <b>smartest</b> advertising solution for dense city centres. Get access to relevant and amazing deals' +
            ' without any hassle.',
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: 'How to use Flowi',
            description: 'Choose to <b>browse</b>, <b>be notified</b>, or <b>seek</b> all kinds of deals through our web app. When you walk by a store' +
            ' with a <b>Flowi</b> logo, be sure to check your phone for an exclusive push notification. That\'s it, simple right?',
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: 'The Best Part',
            description: 'Flowi is totally <b>free</b>. You can even close your browser; you\'ll still receive relevant push notifications and fast, reliable Wifi.',
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ]
  }

  /*---------------------------FUNCTIONS---------------------------*/
  // Send user to Flowi upon tutorial completion.
  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    })
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
