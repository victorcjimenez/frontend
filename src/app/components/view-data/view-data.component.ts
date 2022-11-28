import { Component, Input } from '@angular/core';
import { LabourStats } from 'src/app/model/labourCosts.interfaces';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent {
  @Input() providers: Array<LabourStats> = [];
  @Input() directContractors: LabourStats[] = [];
  @Input() total: LabourStats[] = [];
  @Input() directProv: LabourStats[] = [];
  isDesc: boolean = false;
  column: string = 'name';
  showDirectFirst: boolean = true;

  constructor() {}

  public updateTable(show: boolean) {
    this.showDirectFirst = show;
  }

  public roundOut(value: number) {
    return Math.round(value / 100);
  }

  public updateTotalName(field: string) {
    return field.toUpperCase().substring(0, field.length - 5);
  }

  public updateArrow(col: string) {
    this.isDesc = !this.isDesc;
    this.column = col;
  }
}
