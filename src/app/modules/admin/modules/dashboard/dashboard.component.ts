import { Component } from '@angular/core';
import { faEllipsis, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  faFilter = faFilter;
  faEllipsis = faEllipsis;

  postList: any[] = [
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
  ]
}
