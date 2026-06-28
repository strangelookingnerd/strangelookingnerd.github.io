import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { Component, OnInit} from "@angular/core";

@Component({
  selector: "app-particles",
  templateUrl: "./particles.component.html",
  imports: [NgxParticlesModule],
  styleUrls: ["./particles.component.css"],
})
export class ParticlesComponent implements OnInit {
  particlesUrl = "./assets/configs/particles.json";

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }
}
