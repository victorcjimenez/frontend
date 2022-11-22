import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/config/api.service';
import { LabourCosts, LabourStats } from 'src/app/model/labourCosts.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  labourCostsData: any = [];
  providers: LabourStats[] = [];
  directContractors: LabourStats[] = [];
  total: LabourStats[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData() {
    this.apiService.getLabourCosts().subscribe((res: LabourCosts[]) => {
      this.labourCostsData = res[0];
      this.providers = this.labourCostsData.providers;
      this.directContractors = this.labourCostsData.directContractors;
      this.total = this.labourCostsData.total;
    });
  }
}
