import { Component, numberAttribute } from "@angular/core";

@Component({
    imports: [],
    templateUrl: 'hero.html',
    styleUrl: 'hero.css',
    selector: 'app-hero'
})

export class Hero{

    counterLikes: number = 5;

    incrementar(value: number){
        this.counterLikes += value;
    }
}