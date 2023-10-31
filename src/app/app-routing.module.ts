import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './features/page-home/page-home.component';
import { PageDisclaimerComponent } from './features/page-disclaimer/page-disclaimer.component';
import { PageFormComponent } from './features/page-form/page-form.component';
import { SectionPersonalComponent } from './features/page-form/sections/section-personal/section-personal.component';
import { SectionInfoComponent } from './features/page-form/sections/section-info/section-info.component';
import { SectionTestsComponent } from './features/page-form/sections/section-tests/section-tests.component';
import { SectionExtraComponent } from './features/page-form/sections/section-extra/section-extra.component';
import { PageResultsComponent } from './features/page-results/page-results.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', component: PageHomeComponent },
    { path: 'disclaimer', component: PageDisclaimerComponent },
    { path: 'form', component: PageFormComponent, children: [
        { path: '', redirectTo: 'personal', pathMatch: 'full' },
        { path: 'personal', component: SectionPersonalComponent },
        { path: 'info', component: SectionInfoComponent },
        { path: 'tests', component: SectionTestsComponent },
        { path: 'extra', component: SectionExtraComponent },
        ]
    },
    { path: 'results', component: PageResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
