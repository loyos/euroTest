import { Component, OnInit, ViewChild } from '@angular/core';
import { City } from '@app/eurovision';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EuroserviceService } from '@app/eurovision';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<City>;
  totalElements: number;
  totalPages: number;
  currentPage: number;
  loading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private euroService: EuroserviceService) {
  }

  ngOnInit() {
    this.loading = true;
    this.euroService.getCities(0, 5).subscribe((data: any) => {
      this.totalElements = data.totalElements;
      this.totalPages = data.totalPages;
      this.dataSource = new MatTableDataSource<City>(data.content);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }
  pageEvent(e: any) {
    this.loading = true;
    this.currentPage = e.pageIndex;
    this.euroService.getCities(this.currentPage, e.pageSize).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<City>(data.content);
      this.loading = false;
    });
  }
}
