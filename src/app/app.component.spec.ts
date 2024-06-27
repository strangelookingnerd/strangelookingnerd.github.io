import {TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {InfosComponent} from "./infos/infos.component";
import {ParticlesComponent} from "./particles/particles.component";
import {NgxParticlesModule} from "@tsparticles/angular";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxParticlesModule],
            declarations: [AppComponent, ParticlesComponent, InfosComponent],
        }).compileComponents();
    });

    it('should create component', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
