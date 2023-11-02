import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-page-report',
  templateUrl: './page-report.component.html',
  styleUrls: ['./page-report.component.scss']
})
export class PageReportComponent {
    prediction = ''
    confidence = -1
    shapValues = {}
    
    positive: string[] = []
    negative: string[] = []

    constructor(
        private dataService: DataService,
        private networkService: NetworkService
    ) {}

    ngOnInit() {
        this.networkService.postPredictGood(this.dataService.formdata)
            .subscribe((result: any) => {
                if (result.prediction == 0) {
                    this.prediction = 'not at risk'
                } else if (result.prediction == 1) {
                    this.prediction = 'at risk'
                }
                this.confidence = Math.round(result.voting_confidence * 100)
                this.shapValues = result.shap_values

                this.positive = this.getFactors(this.shapValues).positive
                this.negative = this.getFactors(this.shapValues).negative
            })
    }

    getFactors(shap: { [key: string]: number}) {
        const keyValueArray = Object.entries(shap);

        const positive = []
        const negative = []

        for(const [key, value] of keyValueArray) {
            if (value > 0) {
                positive.push(this.mapKey(key))
            } else {
                negative.push(this.mapKey(key))
            }
        }
        
        return { positive: positive, negative: negative }
    }

    mapKey(key: string): string {
        switch (key) {
            case 'age':
                return 'Age'
                break;
            case 'sex':
                return 'Sex'
                break;
            case 'cp':
                return 'Type of chest pain'
                break;
            case 'trestbps':
                return 'Resting blood pressure'
                break;
            case 'chol':
                return 'Cholesterol'
                break;
            case 'thalach':
                return 'Highest achieved heartrate'
                break;
            case 'oldpeak':
                return 'ST-depression'
                break;
            case 'slope':
                return 'ST-segment slope'
                break;
            case 'ca':
                return 'coloured fluoroscopy vessels'
                break;
            case 'thal':
                return 'Presence of thalassemia'
                break;
            default:
                return 'Error'
                break;
        }
    }
}
