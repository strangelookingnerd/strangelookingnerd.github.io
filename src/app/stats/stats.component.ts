import {Component} from '@angular/core';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
    fadeInStats() {
        this.fade(true, "sloth");
        this.fade(true, "github-stats");
        setTimeout(() => {
            this.link(true);
        }, 2000);

    }

    fadeOutStats() {
        this.fade(false, "sloth");
        this.fade(false, "github-stats");
        this.link(false);
    }

    private fade(fadeIn: boolean, elementId: string) {
        let stats = document.getElementById(elementId);
        if (stats != null) {
            let currentOpacity = window.getComputedStyle(stats, null).getPropertyValue('opacity');
            stats.classList.remove(fadeIn ? 'fade-out' : 'fade-in')
            stats.style.opacity = currentOpacity;
            stats.classList.add(fadeIn ? 'fade-in' : 'fade-out');
        }
    }

    private link(add: boolean) {
        let icon = document.getElementById('github-icon');
        if (icon != null ) {
            if (add) {
                icon.setAttribute('href', 'https://github.com/strangelookingnerd');
                icon.setAttribute('target', '_blank');
            } else {
                icon.removeAttribute('href');
                icon.removeAttribute('target');
            }
        }
    }
}
