import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxParticlesModule} from "@tsparticles/angular";

import {AppComponent} from './app.component';
import {ParticlesComponent} from './particles/particles.component';
import {InfosComponent} from './infos/infos.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [AppComponent, ParticlesComponent, InfosComponent],
    imports: [
        BrowserModule,
        NgxParticlesModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
