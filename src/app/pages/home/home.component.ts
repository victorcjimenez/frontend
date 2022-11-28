import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/config/api.service';
import { LabourCosts, LabourStats } from 'src/app/model/labourCosts.interfaces';
import { OrderBy } from 'src/app/utils/orderby';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  orderBy = new OrderBy();
  providers: LabourStats[] = [];
  directContractors: LabourStats[] = [];
  total: LabourStats[] = [];
  directProv: LabourStats[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData() {
    this.apiService.getLabourCosts().subscribe((res: LabourCosts[]) => {
      this.directProv = res[0].providers.concat(res[0].directContractors);
      this.providers = res[0].providers.sort(
        this.orderBy.startSort('name', 'asc')
      );
      this.directContractors = res[0].directContractors;
      this.total = res[0].total;
    });
  }
}
