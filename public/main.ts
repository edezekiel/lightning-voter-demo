import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import './app/rxjsOperations';
import { AppModule } from './app/app.module';
import { downgradeItems } from './downgrades';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    downgradeItems();
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
  });
