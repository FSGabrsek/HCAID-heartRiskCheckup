import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.scss']
})
export class PageResultsComponent {
    factors: { name: string, importance: number }[] = []
    confidence = -1
    prediction = -1
    shapValues = {}

    constructor(
        private dataService: DataService,
        private networkService: NetworkService
    ) {}

    ngOnInit() {
        this.networkService.postPredictGood(this.dataService.formdata)
            .subscribe((result: any) => {
                this.prediction = result.prediction
                this.confidence = Math.round(result.voting_confidence * 100)
                this.shapValues = result.shap_values

                this.factors = this.getFactors(this.shapValues, 3)
            })
    }

    confident(): boolean {
        return  (this.confidence >= 70)
    }

    uncertain(): boolean {
        return this.confidence > 0 && this.confidence < 70
    }

    risk(): boolean {
        return this.confident() && this.prediction == 1
    }

    healthy(): boolean {
        return this.confident() && this.prediction == 0
    }

    head() {
        if (this.prediction != -1) {
            if (this.confident()) {
                if (this.risk()) {
                    return 'Your patient may be at risk'
                } else if (this.healthy()) {
                    return 'Your patient\'s heart is healthy'
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

    getFactors(shap: { [key: string]: number}, n: number) {
        const keyValueArray = Object.entries(shap);
        keyValueArray.sort((a, b) => b[1] - a[1]);

        const topN = keyValueArray.slice(0, n)

        const factors: any = []

        for(const [key, value] of topN) {
            this.factors.push({name: key, importance: Math.abs(value * 50)})
        }
        
        return factors
    }
}
