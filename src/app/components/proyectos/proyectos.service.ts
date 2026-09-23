import { Service } from "@angular/core";
import { Proyecto } from "../../../interfaces/Proyecto";

@Service()
export class ProyectoService{
    proyectos: Proyecto[] = [
        {name: "Banco de Alimentos API", description: "API REST desarrollada con Spring Boot para la gestión integral de un banco de alimentos: donantes, donaciones, productos, remitos, instituciones beneficiarias y facturación. Proyecto académico en equipo (UTN).", link: "https://github.com/alvarezlautaro/BancoAlimentos.git", srcPhoto: "/fotos-proyectos/banco-alimentos.jpeg"},
        {name: "Sistema de administración hotelera", description: "Sistema de administración hotelera desarrollado en Java para la gestión integral de un hotel: habitaciones, reservas, pasajeros, recepcionistas y administradores, con persistencia de datos en formato JSON. Proyecto académico (UTN).", link: "https://github.com/Ianshu-B/TPFINALBETA.git", srcPhoto: "/fotos-proyectos/admin-hotel.jpg"}
    ]
}