import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
  onSubmit(f) {
    console.log(f.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
