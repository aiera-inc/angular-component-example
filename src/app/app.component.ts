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
      'https://public.aiera.com/aiera-sdk/0.0.35/modules/EventList/index.html',
      'example_iframe'
    );
    eventList.load().then(() => {
      eventList.authenticateApiKey('9b9a25ca85b41fb3c136f9814e7e8105');
    });
    eventList.on('authenticated', () => {
      eventList.configure({
        hideSettings: true,
        options: {
          //ticker: 'meta',
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
    eventList.on('event-audio', ({ action, origin }) => {
      console.log(`${action}: - ${origin}`);
    });
    eventList.on('instrument-selected', (x) => {
      console.log(x);
    });
  }
}
