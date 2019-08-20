import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'testTwo', component: Page2Component },
  {
    path: '',
    component: Page1Component
  },
  { path: '**', component: Page1Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
