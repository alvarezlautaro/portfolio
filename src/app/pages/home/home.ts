import { Component } from "@angular/core";
import { Hero } from "../../components/hero/hero";
import { Proyectos } from "../../components/proyectos/proyectos";
import { Contact } from "../../components/contact/contact";

@Component({
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrl: 'home.css',
    imports: [Hero, Proyectos, Contact]
})

export class Home{

}