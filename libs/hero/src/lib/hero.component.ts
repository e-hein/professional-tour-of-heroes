import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'company-hero',
  template: `
    <p>
      @company/hero works!
    </p>
  `,
  styles: [
  ]
})
export class CompanyHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
