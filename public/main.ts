import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  downgradeComponent,
  downgradeInjectable,
  UpgradeModule,
} from '@angular/upgrade/static';
import './app/rxjsOperations';
import { AppModule } from './app/app.module';
import { NameParserService } from './app/admin/nameParser.service';
import { UnreviewedTalkComponent } from './app/home/unreviewedTalk.component';
import { ProfileComponent } from './app/profile/profile.component';
import { SessionsService } from './app/sessions/sessions.service';
import { DetailPanelComponent } from './app/common/detailPanel.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    // downgrades
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

    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
  });
