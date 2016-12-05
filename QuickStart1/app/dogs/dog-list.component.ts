// ====== ./app/Dogs/dog-list.component.ts ======

// Import component decorator
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//import { ROUTER_DIRECTIVES } from '@angular/router'; //deprecated

@Component({
    template: `
    <h2>Dogs</h2>
    <p>List of dogs</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let dog of dogs | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">pets</i>
            <a [routerLink]="['/dogs', dog.id.$t]">{{ dog.name.$t }}</a>
        </span>
      </li>
    </ul>
    `
     // Providers
    // Already provided in the root module
    //providers: [PetService]
})

// Component class implementing OnInit
export class DogListComponent implements OnInit {

    // Private property for binding
    dogs: Observable<string[]>;

    constructor(private petService: PetService) {

    }

    // Load data once component is ready
    ngOnInit() {
        // Pass retreived pets to the property
        this.dogs = this.petService.findPets('dog');
    }
}