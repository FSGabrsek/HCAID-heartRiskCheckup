import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-extra',
  templateUrl: './section-extra.component.html',
  styleUrls: ['./section-extra.component.scss']
})
export class SectionExtraComponent {
    ca!: number
    thal!: number

    constructor(private dataservice: DataService) {

    }

    valid(): boolean {
        return ([0, 1, 2, 3].indexOf(this.ca) > -1) && ([3, 6, 7].indexOf(this.thal) > -1)
    }

    advance() {
        this.dataservice.save_extra(this.ca, this.thal)
    }
}
