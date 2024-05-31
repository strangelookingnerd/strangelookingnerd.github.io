import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxParticlesModule} from "@tsparticles/angular";

import {AppComponent} from './app.component';
import {ParticlesComponent} from './particles/particles.component';
import {StatsComponent} from './stats/stats.component';

@NgModule({
    declarations: [AppComponent, ParticlesComponent, StatsComponent],
    imports: [
        BrowserModule,
        NgxParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
