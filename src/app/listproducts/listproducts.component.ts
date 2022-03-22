import { Component, OnInit } from '@angular/core';
import { ApiService } from '../serivce/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.scss']
})
export class ListproductsComponent implements OnInit {

  getProduct: any;

  displayedColumns: string[] = [ 'productName', 'category', 'price', 'date', 'Comment', 'freshness','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  userId: string = '';

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getProduct().subscribe((res:any)=>{

       this.dataSource= new MatTableDataSource(res)
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     
    },
    (err:any)=>{
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
