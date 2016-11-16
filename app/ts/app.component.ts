import { Component } from 'angular2/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
    selector: 'app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: [ 'app/ts/app.component.scss' ],
    directives: [ WelcomeComponent, ToDoComponent ]
})

export class AppComponent {}
