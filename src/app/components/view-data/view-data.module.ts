import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByModule } from 'src/app/service/orderby.module';

import { ViewDataComponent } from './view-data.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByModule],
  declarations: [ViewDataComponent],
  exports: [ViewDataComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewDataModule {}
