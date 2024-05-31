import {TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {StatsComponent} from "./stats/stats.component";
import {ParticlesComponent} from "./particles/particles.component";
import {NgxParticlesModule} from "@tsparticles/angular";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxParticlesModule],
            declarations: [AppComponent, ParticlesComponent, StatsComponent],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
