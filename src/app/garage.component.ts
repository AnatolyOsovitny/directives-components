import { Component } from "@angular/core";
import { CarEntity } from "./car.entity";
import { CarComponent } from "./car.component";

@Component({
  selector: "garage",
  templateUrl: "./templates/garage.html"
})
export class GarageComponent {
  public cars: Array<CarEntity>;
  constructor() {
    let carOne: CarEntity = new CarEntity("renault", "blue");
    let carTwo: CarEntity = new CarEntity("fiat", "green");
    let carThree: CarEntity = new CarEntity("citroen", "yellow");
    this.cars = [carOne, carTwo, carThree];
  }
}
