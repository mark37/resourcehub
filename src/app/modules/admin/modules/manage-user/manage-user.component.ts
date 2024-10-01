import { Component } from '@angular/core';
import { faFilter, faPenToSquare, faTableColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent {
  faPenToSquare = faPenToSquare;
  faTableColumns = faTableColumns;
  faFilter = faFilter;

}
