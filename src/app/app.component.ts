import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpcreation';




  
  opened = false;

  constructor( private dialog: MatDialog) { }


   openDialog() {
     this.dialog.open(AddproductComponent, {
       width:'50%'
     })}

    
} 
