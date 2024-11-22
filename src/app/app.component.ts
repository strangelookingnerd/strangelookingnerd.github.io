import {Component} from "@angular/core";
import {InfosComponent} from "./infos/infos.component";
import {ParticlesComponent} from "./particles/particles.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    imports: [
        InfosComponent,
        ParticlesComponent
    ],
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
}
