import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterModule {}
