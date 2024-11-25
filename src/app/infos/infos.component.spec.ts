import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfosComponent} from './infos.component';

describe('InfosComponent', () => {
    let component: InfosComponent;
    let fixture: ComponentFixture<InfosComponent>;

    beforeEach(async () => {
        (window as any).MarketplaceWidget = {
            setupMarketplaceWidget: jasmine.createSpy('setupMarketplaceWidget')
        };

        await TestBed.configureTestingModule({
            imports: [InfosComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(InfosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        delete (window as any).MarketplaceWidget;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should create MarketplaceWidget', () => {
        fixture.detectChanges();
        expect((window as any).MarketplaceWidget.setupMarketplaceWidget).toHaveBeenCalledWith('card', 24613, '#marketplace-info');
    });
});
