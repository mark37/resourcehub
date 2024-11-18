import { FormControl, FormGroup } from "@angular/forms";

export function parentsForm() {
  return new FormGroup({
    ofw_flag: new FormControl<boolean>(false),
    fathers_name: new FormControl<string|null>(null),
    fathers_occupation: new FormControl<string|null>(null),
    fathers_company: new FormControl<string|null>(null),
    mothers_name: new FormControl<string|null>(null),
    mothers_occupation: new FormControl<string|null>(null),
    mothers_company: new FormControl<string|null>(null),
    average_monthly_income: new FormControl<string|null>(null),
  });
}

export function educationForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    lib_education_level_id: new FormControl<string|null>(null),
    lib_academic_program_id: new FormControl<string|null>(null),
    school_name: new FormControl<string|null>(null),
    start_year: new FormControl<string|null>(null),
    end_year: new FormControl<string|null>(null)
  });
}

export function referenceForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    full_name: new FormControl<string|null>(null),
    company_name: new FormControl<string|null>(null),
    contact_number: new FormControl<string|null>(null)
  })
}

export function workExperienceForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    employer_name: new FormControl<string|null>(null),
    position: new FormControl<string|null>(null),
    job_description: new FormControl<string|null>(null),
    start_date: new FormControl<string|null>(null),
    end_date: new FormControl<string|null>(null)
  })
}

export function userForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    lib_school_id: new FormControl<string|null>(null),
    lib_academic_program_id: new FormControl<string|null>(null),
    lib_year_level_id: new FormControl<string|null>(null),
  });
}
