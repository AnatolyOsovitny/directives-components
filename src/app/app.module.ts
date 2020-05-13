import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { GarageComponent } from "./garage.component";
import { CarComponent } from "./car.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, GarageComponent, CarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
