import { Component } from '@angular/core';
import { Aiera } from 'aiera-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {
    const eventList = new Aiera.Module(
      'https://public.aiera.com/aiera-sdk/0.0.29/modules/EventListByTicker/index.html',
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
          eventListFilters: [
            { name: 'transcripts', visible: true, defaultValue: true },
            { name: 'earningsOnly', visible: true, defaultValue: true },
          ],
        },
        overrides: {
          //   style: `
          //         .eventlist__filterby {
          //             background-color: blue
          //         }
          //     `,
        },
      });
    });
    eventList.on('event-selected', (x) => {
      console.log({ x });
    });
  }
}
