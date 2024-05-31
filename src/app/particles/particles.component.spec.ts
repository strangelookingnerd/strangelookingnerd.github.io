import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ParticlesComponent} from "./particles.component";
import {NgxParticlesModule} from "@tsparticles/angular";

describe('ParticlesComponent', () => {
    let component: ParticlesComponent;
    let fixture: ComponentFixture<ParticlesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ParticlesComponent],
            imports: [NgxParticlesModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ParticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
