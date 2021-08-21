import { Input, OnChanges, SimpleChanges } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    @Input() //Torna a possibilidade de adicionar um atributo a tag para receber o valor
    rating:number =0;

    starWidth!: number;
    ngOnChanges(): void {
        this.starWidth = this.rating*74/5;
    }

}