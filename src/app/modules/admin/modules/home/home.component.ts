import { Component } from '@angular/core';
import { faFilter, faPenToSquare, faTableColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faPenToSquare = faPenToSquare;
  faTableColumns = faTableColumns;
  faFilter = faFilter;

  userList: any[] = [
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
  ];
}
