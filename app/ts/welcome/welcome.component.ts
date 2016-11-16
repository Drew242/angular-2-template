import { Component } from 'angular2/core';

@Component({
  selector: 'welcome',
  templateUrl: 'app/ts/welcome.component.html'
})

export class WelcomeComponent{
  constructor(name?: string) {
    if (name) {
      this.name = "Drew Conly"
    } else {
      this.defaultName = "John Smith"
      console.log(`Name is automatically defaulted to ${this.defaultName}`);
    }
  }

  public name: string;
  private defaultName: string;
}
