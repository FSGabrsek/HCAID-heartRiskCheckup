import { Component } from '@angular/core';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.scss']
})
export class PageResultsComponent {
    factors = [
        { name: 'Age', importance: 78 },
        { name: 'Cholesterol', importance: 58 },
        { name: 'Sex', importance: 24 },
    ]
    confidence = 70
    target = 'Absence'

    confident(): boolean {
        return  (this.confidence >= 70)
    }

    uncertain(): boolean {
        return this.confidence > 0 && this.confidence < 70
    }

    risk(): boolean {
        return this.confident() && this.target == 'Presence'
    }

    healthy(): boolean {
        return this.confident() && this.target == 'Absence'
    }

    head() {
        if (this.target != '') {
            if (this.confident()) {
                if (this.risk()) {
                    return 'You may be at risk'
                } else if (this.healthy()) {
                    return 'Your heart is healthy'
                } else {
                    return 'Something went wrong, please try again later'
                }
            } else if (this.uncertain()) {
                return 'We\'re not sure'
            } else {
                return 'Something went wrong, please try again later'
            }
        } else {
            return 'Please wait while we retrieve your results'    
        }
    }
}
