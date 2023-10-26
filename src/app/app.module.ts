import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgParticlesModule} from 'ng-particles';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
