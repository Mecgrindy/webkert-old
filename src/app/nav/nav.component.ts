import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
/* import { Category } from '../category/category'; */

@Component({
  selector: 'web-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit/* , OnChanges  */ {
  sCategoryTitle: string;
  categories = ['filmek', 'kedvencek'];
  /* @Input() categories: Category[];
  @Input() selectedCategory: string;
  @Output() callSelectC = new EventEmitter<string>(); */

  constructor() { }

  ngOnInit() {
  }
  /*
    ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes.selectedCategory) {
        this.selectedCategory = changes.selectedCategory.currentValue;
        this.setTitle();
      }
    } */

  /* select(category: string) {
    this.callSelectC.emit(category);
  }

  setTitle() {
    const category = this.categories.filter(item => item.value === this.selectedCategory);
    this.sCategoryTitle = category && category[0] ? category[0].title : '';
  } */

}
