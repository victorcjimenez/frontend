import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewDataModule } from 'src/app/components/view-data/view-data.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, ViewDataModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
