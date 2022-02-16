import {
  downgradeComponent,
  downgradeInjectable,
} from '@angular/upgrade/static';
import { NameParserService } from './app/admin/nameParser.service';
import { UnreviewedTalkComponent } from './app/home/unreviewedTalk.component';
import { ProfileComponent } from './app/profile/profile.component';
import { SessionsService } from './app/sessions/sessions.service';
import { DetailPanelComponent } from './app/common/detailPanel.component';

declare var angular: angular.IAngularStatic;

export function downgradeItems() {
  angular
    .module('app')
    .factory('nameParser', downgradeInjectable(NameParserService))
    .factory('sessionsService', downgradeInjectable(SessionsService))
    .directive(
      'unreviewedTalk',
      downgradeComponent({
        component: UnreviewedTalkComponent,
      })
    )
    .directive(
      'profile',
      downgradeComponent({
        component: ProfileComponent,
      })
    )
    .directive(
      'detailPanel',
      downgradeComponent({
        component: DetailPanelComponent,
      })
    );
}
