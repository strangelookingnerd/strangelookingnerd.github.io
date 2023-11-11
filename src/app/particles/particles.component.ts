import {Component} from '@angular/core';
import {Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";


@Component({
    selector: 'app-particles',
    templateUrl: './particles.component.html',
    styleUrls: ['./particles.component.css']
})
export class ParticlesComponent {
    particlesUrl = "./assets/particles.json";

    async particlesInit(engine: Engine): Promise<void> {
        await loadSlim(engine);
    }
}
