import { Component } from 'angular2/core';

@Component({
  selector: 'welcome-component',
  templateUrl: 'app/ts/welcome/welcome.component.html',
  styleUrls: [ 'app/ts/welcome/welcome.component.scss' ]
})

export class WelcomeComponent{
  constructor() {
    this.name = ""
    this.visible = true;
    this.person = "";
  }

  speak():void {
    console.log(`Your name is ${this.name}`);
    this.visible = !this.visible;
    this.person = this.name;
  }

  private name: string;
  private visible: boolean;
  private person: string;
  public speak: void;
  private defaultName: string;
}
