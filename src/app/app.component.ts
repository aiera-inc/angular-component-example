import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.loadModule = this.loadModule.bind(this);
    this.checkLoaded = this.checkLoaded.bind(this);
    this.loadScript = this.loadScript.bind(this);

    this.loadScript();
  }

  loadScript() {
    const endpoint = 'https://public.aiera.com/aiera-sdk/0.0.24/embed.js';
    const node = document.createElement('script');
    node.src = endpoint;
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);

    this.checkLoaded();
  }

  checkLoaded() {
    if (!window.Aiera) {
      setTimeout(this.checkLoaded, 500);
    } else {
      this.loadModule();
    }
  }

  loadModule() {
    if (window.Aiera) {
      const Aiera = window.Aiera;
      const eventList = new Aiera.Module(
        'https://public.aiera.com/aiera-sdk/0.0.24/modules/EventListByTicker/index.html',
        'example_iframe'
      );
      eventList.load().then(() => {
        eventList.authenticateApiKey('9b9a25ca85b41fb3c136f9814e7e8105');
      });
      eventList.on('authenticated', () => {
        eventList.configure({
          options: {
            ticker: 'meta',
            darkMode: false,
            showTitleInfo: true,
            showRecordingDetails: true,
            showPriceReaction: true,
            showAudioPlayer: true,
            showSearch: true,
          },
        });
      });
    }
  }
}

declare global {
  interface Window {
    Aiera: any;
  }
}
