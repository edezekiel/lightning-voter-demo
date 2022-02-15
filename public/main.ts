import { downgradeInjectable, UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { NameParserService } from './app/admin/nameParser.service';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    // downgrades
    angular.module('app').factory('nameParser', downgradeInjectable(NameParserService))

    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
  });
