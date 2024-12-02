import {Component} from "@angular/core";
import {InfosComponent} from "./infos/infos.component";
import {ParticlesComponent} from "./particles/particles.component";

@Component({
    standalone: true,
    selector: "app-root",
    templateUrl: "./app.component.html",
    imports: [
        ParticlesComponent,
        InfosComponent
    ],
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
}
