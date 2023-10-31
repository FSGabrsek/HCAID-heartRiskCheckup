import { Component } from '@angular/core';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.scss']
})
export class PageResultsComponent {
    head = 'Please wait while we retrieve your results'
    subhead = ''
    factors = []
}
