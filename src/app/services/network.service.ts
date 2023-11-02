import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { form_input } from '../core/models/form-input';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
    APIUrl = 'http://diseaseheartpredictor.pythonanywhere.com'

    constructor(
        private http: HttpClient
    ) { }

    postPredictGood(data: form_input) {
        const body = {
            age: data.age,
            sex: data.sex,
            cp: data.cp,
            trestbps: data.trestbps,
            chol: data.chol,
            thalach: data.thalach,
            exang: data.exang,
            oldpeak: data.oldpeak,
            slope: data.slope,
            ca: data.ca,
            thal: data.thal
        }

        return this.http.post(`${this.APIUrl}/predictGood`, body)
    }
}
