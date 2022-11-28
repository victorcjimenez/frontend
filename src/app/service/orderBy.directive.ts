import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OrderBy } from 'src/app/utils/orderby';

@Directive({
  selector: '[appSort]',
})
export class OrderByDirective {
  @Input() appSort: any | undefined;
  constructor(private targetElem: ElementRef) {}

  @HostListener('click')
  OrderData() {
    const orderBy = new OrderBy();
    const elem = this.targetElem.nativeElement;
    const order = elem?.getAttribute('data-order');
    const property = elem?.getAttribute('data-name');

    this.appSort?.sort(orderBy.startSort(property, order));
    order === 'desc'
      ? elem.setAttribute('data-order', 'asc')
      : elem.setAttribute('data-order', 'desc');
  }
}
