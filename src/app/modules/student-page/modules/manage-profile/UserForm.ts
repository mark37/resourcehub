import { FormControl, FormGroup } from "@angular/forms";

export function educationForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    user_id: new FormControl<string|null>(null),
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
    user_id: new FormControl<string|null>(null),
    reference_name: new FormControl<string|null>(null),
    reference_desc: new FormControl<string|null>(null),
    reference_contact: new FormControl<string|null>(null)
  })
}

export function workExperienceForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    user_id: new FormControl<string|null>(null),
    company_name: new FormControl<string|null>(null),
    start_date: new FormControl<string|null>(null),
    end_date: new FormControl<string|null>(null)
  })
}
