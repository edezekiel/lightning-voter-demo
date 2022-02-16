import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
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
import { AppModuleNgFactory } from '../aot/public/app/app.module.ngfactory';

declare var angular: angular.IAngularStatic;
// Causes change detection cycle to only run once
enableProdMode();
// At runtime we'll bootstap the module factory. Not the uncompiled AppModule.
platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
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
