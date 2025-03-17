import { Component, OnInit, Renderer2 } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-infos",
  templateUrl: "./infos.component.html",
  styleUrls: ["./infos.component.css"],
  imports: [NgOptimizedImage],
})
export class InfosComponent implements OnInit {
  constructor(private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadMarketplaceWidget();
    this.fetchGitHubRepo(
      "strangelookingnerd",
      "fail2ban-map",
      "https://raw.githubusercontent.com/strangelookingnerd/fail2ban-map/refs/heads/main/public/favicon.ico",
    ).then();
    this.fetchGitHubRepo(
      "jenkinsci",
      "custom-folder-icon-plugin",
      "https://raw.githubusercontent.com/jenkinsci/custom-folder-icon-plugin/refs/heads/main/src/main/webapp/icons/default.svg",
    ).then();
  }

  async fetchGitHubRepo(owner: string, repo: string, icon: string): Promise<void> {
    let apiUrl = "https://api.github.com/repos/" + owner + "/" + repo;
    let response = await fetch(apiUrl);
    let data = await response.json();

    let title = document.getElementById(repo + "-header");
    if (title != null) {
      title.innerHTML = `
            <img src="${icon}" alt="${data.full_name}" class="repo-showcase-avatar" width="40px" height="40px">
            <p class="repo-showcase-title">${data.full_name}</p>`;
    }
    let description = document.getElementById(repo + "-description");
    if (description != null) {
      description.textContent = data.description;
    }
    let stats = document.getElementById(repo + "-stats");
    if (stats != null) {
      stats.innerHTML = `
            <span>&star; ${data.stargazers_count}</span>
            <span>&fork; ${data.forks_count}</span>`;
    }
  }

  loadMarketplaceWidget(): void {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.text = `
      (function() {
        MarketplaceWidget.setupMarketplaceWidget('card', 24613, '#pedro-marketplace-info');
      })();
    `;
    this.renderer.appendChild(document.body, script);
  }

  fadeInInfos() {
    this.fade(true, "showcase");
    this.fade(true, "stats");
    setTimeout(() => {
      this.link(true, "https://github.com/strangelookingnerd", "github-icon");
      this.link(true, "https://github.com/strangelookingnerd/fail2ban-map", "fail2ban-map-showcase");
      this.link(true, "https://github.com/jenkinsci/custom-folder-icon-plugin", "custom-folder-icon-plugin-showcase");
    }, 2000);
  }

  fadeOutInfos() {
    this.fade(false, "showcase");
    this.fade(false, "stats");
    setTimeout(() => {
      this.link(false, "", "github-icon");
      this.link(false, "", "fail2ban-map-showcase");
      this.link(false, "", "custom-folder-icon-plugin-showcase");
    }, 2000);
  }

  private fade(fadeIn: boolean, elementId: string) {
    let info = document.getElementById(elementId);
    if (info != null) {
      let currentOpacity = window.getComputedStyle(info, null).getPropertyValue("opacity");
      info.classList.remove(fadeIn ? "fade-out" : "fade-in");
      info.style.opacity = currentOpacity;
      info.classList.add(fadeIn ? "fade-in" : "fade-out");
    }
  }

  private link(add: boolean, url: string, elementId: string) {
    let icon = document.getElementById(elementId);
    if (icon != null) {
      if (add) {
        icon.style.textDecoration = "none";
        icon.style.color = "#000";
        icon.setAttribute("href", url);
        icon.setAttribute("target", "_blank");
      } else {
        icon.removeAttribute("href");
        icon.removeAttribute("target");
      }
    }
  }
}
