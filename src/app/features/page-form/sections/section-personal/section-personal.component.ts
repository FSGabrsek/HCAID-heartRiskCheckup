import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-personal',
  templateUrl: './section-personal.component.html',
  styleUrls: ['./section-personal.component.scss']
})
export class SectionPersonalComponent {
    sex!: number
    age!: number

    constructor(private dataservice: DataService) {

    }

    valid(): boolean {
        return ([1, 0].indexOf(this.sex) > -1) && (this.age > 0) 
    }

    advance() {
        this.dataservice.save_personal(this.age, this.sex)
    }
}
