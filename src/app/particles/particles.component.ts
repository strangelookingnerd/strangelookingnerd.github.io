import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { Component } from "@angular/core";
import { Container, Engine } from "@tsparticles/engine";

@Component({
  selector: "app-particles",
  templateUrl: "./particles.component.html",
  imports: [NgxParticlesModule],
  styleUrls: ["./particles.component.css"],
})
export class ParticlesComponent {
  particlesUrl = "./assets/configs/particles.json";

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
