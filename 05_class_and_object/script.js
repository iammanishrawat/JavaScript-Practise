class admissionForm {
    constructor() {
        console.log('constructor is working...');
    }
    // fill(studentName, className) {
    //     this.name = studentName
    //     this.className = className
    // }
    submit() {
        alert(`${this.name}, your form has been submitted`)
    }

    reject() {
        alert(`${this.name}, your form has been rejected`)
    }
}

let manishAdmissionForm = new admissionForm()
// manishAdmissionForm.fill("Manish Rawat", 12);

let rahulAdmissionForm = new admissionForm()
// rahulAdmissionForm.fill("Rahul Kumar", 12);


manishAdmissionForm.submit()
manishAdmissionForm.reject()

rahulAdmissionForm.submit()
rahulAdmissionForm.reject()