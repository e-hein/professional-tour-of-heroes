import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-examples',
  template: `
    <p>
      @examples/hero works!
    </p>
  `,
  styles: [
  ]
})
export class HeroExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
