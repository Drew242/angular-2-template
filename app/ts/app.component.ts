import { Component } from 'angular2/core';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
    selector: 'app',
    templateUrl: 'app/ts/app.component.html',
    providers: [ WelcomeComponent ]
})

export class AppComponent {}
