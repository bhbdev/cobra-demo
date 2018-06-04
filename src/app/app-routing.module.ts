import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessFormComponent } from './business-form/business-form.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: BusinessFormComponent, runGuardsAndResolvers: 'always' },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  BusinessFormComponent,
  WidgetsComponent,
  NewslettersComponent,
  ContactComponent,
  PageNotFoundComponent
];
