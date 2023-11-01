import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-tests',
  templateUrl: './section-tests.component.html',
  styleUrls: ['./section-tests.component.scss']
})
export class SectionTestsComponent {
    thalach!: number
    exang!: number
    oldpeak!: number
    slope!: number

    constructor(private dataservice: DataService) {

    }

    valid(): boolean {
        return (this.thalach > 0) && ([1, 0].indexOf(this.exang) > -1) && (this.oldpeak >= 0) && ([1, 2, 3].indexOf(this.slope) > -1)
    }

    advance() {
        this.dataservice.save_tests(this.thalach, this.exang, this.oldpeak, this.slope)
    }
}
