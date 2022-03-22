import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  
           {path:'',component:ListproductsComponent},
           {path:'updateproduct/:id',component:UpdateproductComponent},
           {path:'deleteproduct/:id',component:DeleteproductComponent},
      ]
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
