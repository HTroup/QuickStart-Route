// ====== ./app/Cats/cat-list.component.ts ======

// Import component decorator
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
    template: `
    <h2>Cats</h2>
    <p>List of cats</p>

    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let cat of cats | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">pets</i>
            <a [routerLink]="['/cats', cat.id.$t]">{{ cat.name.$t }}</a>
        </span>
      </li>
    </ul>`
})

// Component class
export class CatListComponent implements OnInit {

    // Private property for binding
    cats: Observable<string[]>;

    constructor(private petService: PetService) {

    }

    // Load data once component is ready
    ngOnInit() {
        // Pass retreived pets to the property
        this.cats = this.petService.findPets('cat');
    }
}