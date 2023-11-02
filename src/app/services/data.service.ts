import { Injectable } from '@angular/core';
import { form_input } from '../core/models/form-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    formdata: form_input

    constructor() {
        this.formdata = new form_input()
    }

    save_personal(age: number, sex: number) {
        this.formdata.set_personal(age, sex)
    }

    save_info(cp: number, trestbps: number, chol: number) {
        this.formdata.set_info(cp, trestbps, chol)
    }

    save_tests(thalach: number, exang: number, oldpeak: number, slope: number) {
        this.formdata.set_tests(thalach, exang, oldpeak, slope)
    }

    save_extra(ca: number, thal: number) {
        this.formdata.set_extra(ca, thal)
    }

    clear() {
        this.formdata = new form_input()
    }
    
    public get valid() : boolean {
        return this.formdata.valid 
    }
    
}
