export class form_input {
    public age!: number
    public sex!: number
    public cp!: number
    public trestbpm!: number
    public chol!: number
    public thalach!: number
    public exang!: number
    public oldpeak!: number
    public slope!: number
    public ca!: number
    public thal!: number
    
    constructor() {
    }

    set_personal(age: number, sex: number) {
        this.age = age
        this.sex = sex
    }

    set_info(cp: number, trestbpm: number, chol: number) {
        this.cp = cp
        this.trestbpm = trestbpm
        this.chol = chol
    }

    set_tests(thalach: number, exang: number, oldpeak: number, slope: number) {
        this.thalach = thalach
        this.exang = exang
        this.oldpeak = oldpeak
        this.slope = slope
    }

    set_extra(ca: number, thal: number) {
        this.ca = ca
        this.thal = thal
    }

    public get valid() : boolean {
        return (Object.values(this).length == 11) && !(Object.values(this).includes(undefined))
    }
}