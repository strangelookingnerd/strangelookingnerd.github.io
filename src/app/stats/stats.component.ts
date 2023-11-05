import {Component} from '@angular/core';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
    fadeInStats() {
        this.fade(true);
    }

    fadeOutStats() {
        this.fade(false);
    }

    private fade(fadeIn: boolean) {
        let stats = document.getElementById('github-stats');
        if (stats != null) {
            let currentOpacity = window.getComputedStyle(stats, null).getPropertyValue('opacity');
            stats.classList.remove(fadeIn ? 'fade-out' : 'fade-in')
            stats.style.opacity = currentOpacity;
            stats.classList.add(fadeIn ? 'fade-in' : 'fade-out');
        }

        let icon = document.getElementById('github-icon');
        if (icon != null) {
            if (fadeIn) {
                icon.setAttribute('href', 'https://github.com/strangelookingnerd');
                icon.setAttribute('target', '_blank');
            } else {
                icon.removeAttribute('href');
                icon.removeAttribute('target');
            }
        }
    }
}
