import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgParticlesModule} from 'ng-particles';

import {AppComponent} from './app.component';
import {ParticlesComponent} from './particles/particles.component';
import {LinksComponent} from './links/links.component';

@NgModule({
    declarations: [AppComponent, ParticlesComponent, LinksComponent],
    imports: [
        BrowserModule,
        NgParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
