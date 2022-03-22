import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../serivce/api.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  productLoaded : boolean = false;

  productId: any;

  productDetiles: any;

  editproductForm:FormGroup = new FormGroup({});

  freshnessList = ["Brand New", "second Hand", "Refurbished"] 


  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private formBuilder : FormBuilder,
              private snackBar : MatSnackBar) {  }

  ngOnInit(): void {
     this.productLoaded = false;

     this.activatedRoute.params.subscribe((params: any)=>  {
       console.log('>>>>>>>>>>>>>>>>',params)
      this.productId = params.id;
      
      console.log("~~~~~~~~~~>",this.productId); //this is empty object
    
    })
     if(this.productId != ''){
    
           this.apiService.usersId(this.productId).subscribe((data: any)=>{
             console.log("------>",data)
             this.productDetiles = data,
             Object.assign(this.productDetiles, data);
             console.log("======>",this.productDetiles);


             this.editproductForm = this.formBuilder.group({
              'productName': new FormControl(this.productDetiles.productName),
              'category': new FormControl(this.productDetiles.category),
              'freshness': new FormControl(this.productDetiles.freshness),
              'price': new FormControl(this.productDetiles.price),
              'Comment': new FormControl(this.productDetiles.Comment),
              'date': new FormControl(this.productDetiles.date)
             
            })
            this.productLoaded = true;
             console.log("***************************>",this.productLoaded)

            },
            err => {
              this.snackBar.open("product not added");
            },
            
            
            
           )
          }
           }
           updateproduct(){
            this.apiService.Updateproduct(this.productId,this.editproductForm.value).subscribe(data => {
              console.log("ssssssssss",data)
              this.snackBar.open("user updated successfully")},
              err => {
                this.snackBar.open("user not updated");
              

             })

           }
}