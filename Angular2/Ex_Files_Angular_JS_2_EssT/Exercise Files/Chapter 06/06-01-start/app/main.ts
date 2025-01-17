import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MediaItemService} from './media-item.service';
import {provide} from 'angular2/core';
import {LOOKUP_LISTS, lookupLists} from './providers';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [
        MediaItemService,
        provide(LOOKUP_LISTS, { useValue: lookupLists }),
        HTTP_PROVIDERS
    ]);