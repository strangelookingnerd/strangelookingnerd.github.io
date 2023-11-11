import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {StatsComponent} from "./stats/stats.component";
import {ParticlesComponent} from "./particles/particles.component";
import {NgParticlesModule} from "ng-particles";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgParticlesModule],
            declarations: [AppComponent, ParticlesComponent, StatsComponent],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
