import { Component, OnChanges, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ChildComponent } from "./child.component";
@Component({
  selector: "parent-component",
  template: `
    <child-component [data]="asyncData"></child-component>
  `
})
export class ParentComponent {
  asyncData: any;
  constructor(private _http: Http) {}
  ngOnInit() {
    this._http
      .get("some.url")
      .map(this.extractData)
      .subscribe(this.handleData)
      .catch(this.handleError);
  }
  extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  handleData(data: any) {
    this.asyncData = data;
  }
  handleError(error: any) {
    console.error(error);
  }
}
