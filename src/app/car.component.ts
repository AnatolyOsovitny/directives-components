import { Component, Input } from "@angular/core";
import { CarEntity } from "./car.entity";
@Component({
  selector: "car-component",
  templateUrl: "./templates/car.html"
})
export class CarComponent {
  @Input() car: CarEntity;
  constructor() {
    console.log("gros");
  }
}
