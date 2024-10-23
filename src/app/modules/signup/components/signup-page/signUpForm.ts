import { FormControl, FormGroup } from "@angular/forms";

export function signUpForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    first_name: new FormControl<string|null>(null),
    middle_name: new FormControl<string|null>(null),
    last_name: new FormControl<string|null>(null),
    suffix_name: new FormControl<string|null>(null),
    email: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null),
    password_confirmation: new FormControl<string|null>(null),
    contact_number: new FormControl<string|null>(null),
    gender: new FormControl<string|null>(null),
    birthdate: new FormControl<string|null>(null),
    province_code: new FormControl<string|null>(null),
    municipality_code: new FormControl<string|null>(null),
    barangay_code: new FormControl<string|null>(null),
    address: new FormControl<string|null>(null),
    place_of_birth: new FormControl<string|null>(null),
    lib_school_id: new FormControl<string|null>(null),
    scholar_flag: new FormControl<boolean>(false),
    shiftee_flag	: new FormControl<boolean>(false),
    irregular_flag: new FormControl<boolean>(false),
    course_code: new FormControl<string|null>(null),
    year_level: new FormControl<string|null>(null),
    photo: new FormControl<string|null>(null),
    report_of_grade: new FormControl<string|null>(null),
    ofw_flag: new FormControl<boolean>(false),
    fathers_name: new FormControl<string|null>(null),
    fathers_occupation: new FormControl<string|null>(null),
    fathers_company: new FormControl<string|null>(null),
    mothers_name: new FormControl<string|null>(null),
    mothers_occupation: new FormControl<string|null>(null),
    mothers_company: new FormControl<string|null>(null),
    average_monthly_income: new FormControl<string|null>(null)
  });
}

