import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from '../../service/chart.service';
import { Chart } from '../../model/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public donutData;
  public chartData;
  public tableData;

  private router: Router
  private chartService: ChartService
  public record: Chart;

  constructor(router: Router, chartService: ChartService) {
    this.router = router;
    this.chartService = chartService;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onSignOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  fetchData() {
    this.chartService.getChartData().subscribe((data: Chart) => {
      this.donutData = data.chartDonut;
      this.chartData = data.chartBar;
      this.tableData = data.tableUsers;
    });
  }

}
