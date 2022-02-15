import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParserService } from './admin/nameParser.service';

import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        NameParserService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [

    ]
})
export class AppModule {

}