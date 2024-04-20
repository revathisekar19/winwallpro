import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GlassProjectComponent} from "./glass-project/glass-project.component";
import {GlassDetailsComponent} from "./glass-details/glass-details.component";
import {GlassSummaryComponent} from "./glass-summary/glass-summary.component";
import {BisDetailsComponent} from "./glass-details/bis-details/bis-details.component";
import {NablDetailsComponent} from "./glass-details/nabl-details/nabl-details.component";
import {BisProjectComponent} from "./glass-project/bis-project/bis-project.component";
import {NablProjectComponent} from "./glass-project/nabl-project/nabl-project.component";
import {BisSummaryComponent} from "./glass-summary/bis-summary/bis-summary.component";
import {NablSummaryComponent} from "./glass-summary/nabl-summary/nabl-summary.component";


const routes: Routes = [
    {
        path: 'projects',
        component: GlassProjectComponent,
        children: [
            {
                path: '',
                redirectTo: 'bis',
                pathMatch: 'full'
            },
            {
                path: 'bis',
                component: BisProjectComponent
            },
            {
                path: 'nabl',
                component: NablProjectComponent
            }
        ]
    },
    {
        path: 'details',
        component: GlassDetailsComponent,
        children: [
            {
                path: '',
                redirectTo: 'bis',
                pathMatch: 'full'
            },
            {
                path: 'bis',
                component: BisDetailsComponent
            },
            {
                path: 'nabl',
                component: NablDetailsComponent
            }
        ]
    },
    {
        path: 'summary',
        component: GlassSummaryComponent,
        children: [
            {
                path: '',
                redirectTo: 'bis',
                pathMatch: 'full'
            },
            {
                path: 'bis',
                component: BisSummaryComponent
            },
            {
                path: 'nabl',
                component: NablSummaryComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlassRoutingModule{ }
