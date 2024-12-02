import {NgModule} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppComponent
    ],
    providers: []
})
export class AppModule {
}

bootstrapApplication(AppComponent).then(r => {
});