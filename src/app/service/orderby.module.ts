import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OrderByDirective } from './orderBy.directive';

@NgModule({
  imports: [],
  declarations: [OrderByDirective],
  exports: [OrderByDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrderByModule {}
