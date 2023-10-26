import {Component} from "@angular/core";
import type {Engine} from "tsparticles-engine";
import {
    AnimationMode,
    DestroyType,
    MoveDirection,
    OutMode,
    PixelMode,
    StartValueType
} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    id = "strangelookingnerd";
    particlesOptions = {
        background: {
            color: {
                value: "#000"
            },
            opacity: 1
        },
        detectRetina: true,
        fpsLimit: 120,
        particles: {
            color: {
                value: "random",
                animation: {
                    h: {
                        count: 0,
                        enable: true,
                        offset: 0,
                        speed: 50,
                        delay: 0,
                        decay: 0,
                        sync: false
                    }
                }
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90
                },
                center: {
                    x: 50,
                    y: 50,
                    mode: PixelMode.percent,
                    radius: 0
                },
                decay: 0,
                direction: MoveDirection.none,
                drift: 0,
                enable: true,
                outModes: {
                    default: OutMode.out,
                    bottom: OutMode.out,
                    left: OutMode.out,
                    right: OutMode.out,
                    top: OutMode.out
                },
                random: false,
                size: false,
                speed: 2,
                straight: false,
                vibrate: false,
                warp: false
            },
            number: {
                density: {
                    enable: true,
                    width: 1920,
                    height: 1080
                },
                limit: 0,
                value: 100
            },
            opacity: {
                random: {
                    enable: true,
                    minimumValue: 0.5
                },
                value: {
                    min: 0.5,
                    max: 1.0
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 0.5,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: AnimationMode.auto,
                    startValue: StartValueType.random,
                    destroy: DestroyType.none,
                    minimumValue: 0.3
                }
            },
            reduceDuplicates: false,
            shape: {
                close: true,
                fill: true,
                type: "circle"
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 3
                },
                value: {
                    min: 3,
                    max: 5
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 3,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: AnimationMode.auto,
                    startValue: StartValueType.random,
                    destroy: DestroyType.none,
                    minimumValue: 1
                }
            },
            links: {
                blink: false,
                color: {
                    value: "random"
                },
                consent: false,
                distance: 200,
                enable: true,
                frequency: 1,
                opacity: 0.5,
                width: 2,
                warp: false
            }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        smooth: true,
        motion: {
            disable: false,
            reduce: {
                factor: 4,
                value: true
            }
        }
    };

    async particlesInit(engine: Engine): Promise<void> {
        await loadSlim(engine);
    }
}
