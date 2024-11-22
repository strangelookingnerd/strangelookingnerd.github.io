import {NgModule} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {NgxParticlesModule} from "@tsparticles/angular";

import {AppComponent} from './app.component';
import {ParticlesComponent} from './particles/particles.component';
import {InfosComponent} from './infos/infos.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        NgxParticlesModule,
        NgOptimizedImage,
        AppComponent,
        ParticlesComponent,
        InfosComponent
    ],
    providers: []
})
export class AppModule {
}

bootstrapApplication(AppComponent).then(r => {
});