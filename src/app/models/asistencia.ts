import { Estudiante } from "./estudiante";

export class Asistencia {
    id: number;
    fecha: string;
    estado: string;
    estudiante: Estudiante;

    constructor(){
        this.estado = 'FALTA';
        let f = new Date();
        this.fecha = f.getDate() + '/' + (f.getMonth()+1) + '/' + f.getFullYear();
    }
}
