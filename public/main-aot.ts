import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import './app/rxjsOperations';
import { AppModuleNgFactory } from '../aot/public/app/app.module.ngfactory';
import { downgradeItems } from './downgrades';

// Causes change detection cycle to only run once
enableProdMode();
// At runtime we'll bootstap the module factory. Not the uncompiled AppModule.
platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .then((platformRef) => {
    downgradeItems();
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
  });
