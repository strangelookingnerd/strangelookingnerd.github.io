import {Component, OnInit, Renderer2} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css'],
    imports: [
        NgOptimizedImage
    ]
})
export class InfosComponent implements OnInit {

    constructor(private readonly renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.loadMarketplaceWidget();
    }

    loadMarketplaceWidget(): void {
        const script = this.renderer.createElement('script');
        script.type = 'text/javascript';
        script.text = `
      (function() {
        MarketplaceWidget.setupMarketplaceWidget('card', 24613, '#marketplace-info');
      })();
    `;
        this.renderer.appendChild(document.body, script);
    }

    fadeInInfos() {
        this.fade(true, 'marketplace');
        this.fade(true, 'stats');
        setTimeout(() => {
            this.link(true, 'https://github.com/strangelookingnerd', 'github-icon');
            this.link(true, 'https://plugins.jetbrains.com/plugin/24613-pedro-progress-bar', 'pedro-icon');
        }, 2000);
    }

    fadeOutInfos() {
        this.fade(false, 'marketplace');
        this.fade(false, 'stats');
        setTimeout(() => {
            this.link(false, '', 'github-icon');
            this.link(false, '', 'pedro-icon');
        }, 2000);
    }

    private fade(fadeIn: boolean, elementId: string) {
        let info = document.getElementById(elementId);
        if (info != null) {
            let currentOpacity = window.getComputedStyle(info, null).getPropertyValue('opacity');
            info.classList.remove(fadeIn ? 'fade-out' : 'fade-in')
            info.style.opacity = currentOpacity;
            info.classList.add(fadeIn ? 'fade-in' : 'fade-out');
        }
    }

    private link(add: boolean, url: string, elementId: string) {
        let icon = document.getElementById(elementId);
        if (icon != null) {
            if (add) {
                icon.setAttribute('href', url);
                icon.setAttribute('target', '_blank');
            } else {
                icon.removeAttribute('href');
                icon.removeAttribute('target');
            }
        }
    }
}
