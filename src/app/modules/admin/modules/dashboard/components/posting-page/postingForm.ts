import { FormControl, FormGroup } from "@angular/forms";

export function postingForm() {
  return new FormGroup({
    id: new FormControl<string|null>(null),
    date_published: new FormControl<string|null>(null),
    date_end: new FormControl<string|null>(null),
    lib_posting_category_id: new FormControl<string|null>(null),
    title: new FormControl<string|null>(null),
    description: new FormControl<string|null>(null),
    slot: new FormControl<number|null>(null),
    address: new FormControl<string|null>(null),
    barangay_code: new FormControl<string|null>(null),
    coordinates: new FormControl<any|null>(null),
    no_scholar_flag: new FormControl<boolean>(false),
    no_ofw_flag : new FormControl<boolean>(false),
    no_shiftee_flag: new FormControl<boolean>(false),
    no_irregular_flag: new FormControl<boolean>(false),
    solo_parent_flag: new FormControl<boolean>(false),
    pwd_flag: new FormControl<boolean>(false),
    gwa: new FormControl<number|null>(null),
    lib_academic_program_id: new FormControl<string|null>(null),
    lib_year_level_id: new FormControl<string|null>(null),
    lib_average_monthly_income_id: new FormControl<string|null>(null),
  });
}

