import {
  Component,
  Renderer2,
  ElementRef,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const appTestTwo = this.renderer.createElement('app-test-two');
    this.renderer.appendChild(this.el.nativeElement, appTestTwo);
    const s1 = this.renderer.createElement('script');
    s1.type = 'text/javascript';
    s1.src = './assets/test-two.js';
    this.renderer.appendChild(this.document.body, s1);
  }
}
