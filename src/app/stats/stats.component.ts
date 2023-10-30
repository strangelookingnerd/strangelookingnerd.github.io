import {Component} from '@angular/core';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
})
export class StatsComponent {

    fadeInStats() {
        let stats = document.getElementById('github-stats');
        if (stats != null) {
            let currentOpacity = window.getComputedStyle(stats, null).getPropertyValue('opacity');
            stats.classList.remove('fade-out');
            stats.style.opacity = currentOpacity;
            stats.classList.add('fade-in')
        }
    }

    fadeOutStats() {
        let stats = document.getElementById('github-stats');
        if (stats != null) {
            let currentOpacity = window.getComputedStyle(stats, null).getPropertyValue('opacity');
            stats.classList.remove('fade-in')
            stats.style.opacity = currentOpacity;
            stats.classList.add('fade-out');

        }
    }
}
