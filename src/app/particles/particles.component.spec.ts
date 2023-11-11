import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ParticlesComponent} from "./particles.component";
import {NgParticlesModule} from "ng-particles";

describe('ParticlesComponent', () => {
    let component: ParticlesComponent;
    let fixture: ComponentFixture<ParticlesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ParticlesComponent],
            imports: [NgParticlesModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ParticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
