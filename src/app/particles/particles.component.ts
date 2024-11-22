import {Component} from '@angular/core';
import {loadSlim} from "@tsparticles/slim";
import {Engine} from "@tsparticles/engine";
import {NgxParticlesModule} from "@tsparticles/angular";

@Component({
    selector: 'app-particles',
    templateUrl: './particles.component.html',
    imports: [
        NgxParticlesModule
    ],
    styleUrls: ['./particles.component.css']
})
export class ParticlesComponent {
    particlesUrl = "./assets/configs/particles.json";

    async particlesInit(engine: Engine): Promise<void> {
        await loadSlim(engine);
    }
}
