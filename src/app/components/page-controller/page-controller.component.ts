import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-controller',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './page-controller.component.html',
  styleUrl: './page-controller.component.scss'
})
export class PageControllerComponent implements OnChanges {
  @Output() movePage = new EventEmitter<any>();
  @Input() meta!: any;

  faAnglesLeft = faAnglesLeft;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faAnglesRight = faAnglesRight;

  loadPage(page: number) {
    this.movePage.emit(page);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('page controller was called')
  }
}
