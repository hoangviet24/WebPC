import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { CostsComponent } from './components/costs/costs.component';

export const routes: Routes = [
  {path:'',redirectTo:'body',pathMatch:'full'},
  {path:'shippingpolicy', component: ShippingPolicyComponent,title:'Chính sách vận chuyển'},
  {path: 'body', component: BodyComponent},
  {path: 'costs', component: CostsComponent,title:'Chi phí'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
