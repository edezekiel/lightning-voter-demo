import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParserService } from './admin/nameParser.service';

import { AppComponent } from './app.component';
import { DetailPanelComponent } from './common/detailPanel.component';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SessionsService } from './sessions/sessions.service';
import { TOASTR_TOKEN } from './toastr/toastr.service';

/*
    @param injector is the AngularJS dependency injector
    
    Calls the get function on that injector and asks to get back
    the $location service from the AngularJS dependency container
*/
function getLocation(i) {
  return i.get('$location');
}

function getCurrentIdentity(i) {
  return i.get('currentIdentity');
}

function getToastr() {
  return toastr;
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, UpgradeModule],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent,
    DetailPanelComponent,
  ],
  providers: [
    NameParserService,
    { provide: '$location', useFactory: getLocation, deps: ['$injector'] },
    {
      provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector'],
    },
    { provide: TOASTR_TOKEN, useFactory: getToastr },
    SessionsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent,
  ],
})
export class AppModule {}
