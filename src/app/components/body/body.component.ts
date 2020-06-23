import {Component} from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;
    frase: any = {
        mensaje: 'One life for life and be happy',
        author: 'paul'
    };

    personajes: string[] = ['luffy', 'roronoa', 'sanji'];
}