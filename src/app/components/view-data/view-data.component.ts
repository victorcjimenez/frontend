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

  showDirectFirst: boolean = true;

  constructor() {}

  public updateTable(show: boolean) {
    this.showDirectFirst = show;
  }
}
