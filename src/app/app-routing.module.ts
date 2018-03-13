import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import { AboutComponent } from './about.component';
import { MentoringComponent } from './mentoring.component';



const routes: Routes = [
	{ path: '', redirectTo: 'intro', pathMatch: 'full' },
	{ path: 'intro', component: IntroComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'mentoring', component: MentoringComponent}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
