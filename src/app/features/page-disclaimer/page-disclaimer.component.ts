import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-disclaimer',
  templateUrl: './page-disclaimer.component.html',
  styleUrls: ['./page-disclaimer.component.scss']
})
export class PageDisclaimerComponent {
    isChecked: boolean = false

    constructor(
        private dataService: DataService
    ) {}

    start() {
        this.dataService.clear()
    }
}
