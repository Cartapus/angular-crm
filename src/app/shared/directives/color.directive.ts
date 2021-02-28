import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit, OnChanges {
  @Input() item: any;
  @HostBinding('class') public myclass!: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {
    // const p = this.renderer.createElement('p')
    // const text = this.renderer.createText('Ceci est mon paragraphe')
    // this.renderer.appendChild(p, text)

    // Rattacher p au template
    // this.renderer.appendChild(this.elRef.nativeElement, p)
  }

  ngOnChanges() {
    this.myclass = `class-${this.item.toLowerCase()}`;
    // console.log(this.myclass);
  }

  @HostListener('mouseover')
  mouseOver(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '')
  }
}
