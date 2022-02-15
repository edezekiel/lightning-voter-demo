import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParserService } from './admin/nameParser.service';

import { AppComponent } from './app.component';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { ProfileComponent } from './profile/profile.component';

/*
    @param injector is the AngularJS dependency injector
    
    Calls the get function on that injector and asks to get back
    the $location service from the AngularJS dependency container
*/
function getLocation(injector) {
  return injector.get('$location');
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, UpgradeModule],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
  ],
  providers: [
    NameParserService,
    { provide: '$location', useFactory: getLocation, deps: ['$injector'] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [UnreviewedTalkComponent, ProfileComponent],
})
export class AppModule {}
