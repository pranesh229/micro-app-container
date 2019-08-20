import {
  Component,
  Renderer2,
  ElementRef,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // APP 1
    const appTestOne = this.renderer.createElement('app-test-one');

    this.renderer.appendChild(this.el.nativeElement, appTestOne);

    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/test-one.js';
    this.renderer.appendChild(this.document.body, s);
  }
}
