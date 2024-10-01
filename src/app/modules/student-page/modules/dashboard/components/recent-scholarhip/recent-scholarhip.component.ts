import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-scholarhip',
  templateUrl: './recent-scholarhip.component.html',
  styleUrl: './recent-scholarhip.component.scss'
})
export class RecentScholarhipComponent implements OnInit {
  recentScholarhip: any[] = [];

  ngOnInit(): void {
    this.recentScholarhip = [
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024' },
    ]
  }
}
