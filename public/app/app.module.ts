import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { AllSessionsResolver } from '../sessions/allSessions.resolver';
import { NameParserService } from './admin/nameParser.service';
import { ResultsComponent } from './admin/results.component';

import { AppComponent } from './app.component';
import { DetailPanelComponent } from './common/detailPanel.component';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from './security/admin.guard';
import { SessionDetailWithVotesComponent } from './sessions/sessionDetailWithVotes.component';
import { SessionsService } from './sessions/sessions.service';
import { TOASTR_TOKEN } from './toastr/toastr.service';

/*
    @param injector is the AngularJS dependency injector
    
    Calls the get function on that injector and asks to get back
    the $location service from the AngularJS dependency container
*/
export function getLocation(i) {
  return i.get('$location');
}
export function getCurrentIdentity(i) {
  return i.get('currentIdentity');
}
export function getAuth(i) {
  return i.get('auth');
}
export function getToastr() {
  return toastr;
}

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    return url.toString().startsWith('/admin/results');
  }
  extract(url: UrlTree): UrlTree {
    return url;
  }
  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot(
      [
        {
          path: 'admin/results',
          component: ResultsComponent,
          resolve: { sessions: AllSessionsResolver },
          canActivate: [AdminGuard],
        },
      ],
      { useHash: true }
    ),
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent,
    DetailPanelComponent,
    ResultsComponent,
    SessionDetailWithVotesComponent,
  ],
  providers: [
    NameParserService,
    { provide: '$location', useFactory: getLocation, deps: ['$injector'] },
    {
      provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector'],
    },
    {
      provide: 'auth',
      useFactory: getAuth,
      deps: ['$injector'],
    },
    { provide: TOASTR_TOKEN, useFactory: getToastr },
    SessionsService,
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' },
    AllSessionsResolver,
    AdminGuard,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent,
    ResultsComponent,
  ],
})
export class AppModule {}
