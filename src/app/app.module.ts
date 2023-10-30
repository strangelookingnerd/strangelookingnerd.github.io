import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgParticlesModule} from 'ng-particles';

import {AppComponent} from './app.component';
import {ParticlesComponent} from './particles/particles.component';
import {StatsComponent} from './stats/stats.component';

@NgModule({
    declarations: [AppComponent, ParticlesComponent, StatsComponent],
    imports: [
        BrowserModule,
        NgParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
