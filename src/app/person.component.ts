import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
    selector: 'person',
    // template: '<h2> {{ "Title: "  + title }}</h2>',
    template: `
        <h2> {{title}} </h2>
            <ul>
                <li *ngFor="let person of people">
                    {{person}}
                </li>
            </ul>
        
        `
})

export class PersonComponent{
    title = "Title: person's details"

    people;

    constructor(service: PersonService){
        // let service = new PersonService();
        this.people = service.getPerson();
    }

}