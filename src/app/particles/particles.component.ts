import {Component} from '@angular/core';
import {loadSlim} from "@tsparticles/slim";
import {Engine} from "@tsparticles/engine";

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
