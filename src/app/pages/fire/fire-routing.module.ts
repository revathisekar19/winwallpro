import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FireProjectComponent} from "./fire-project/fire-project.component";
import {FrInlabProjectComponent} from "./fire-project/fr-inlab-project/fr-inlab-project.component";
import {FrOnsiteProjectComponent} from "./fire-project/fr-onsite-project/fr-onsite-project.component";
import {FireDetailsComponent} from "./fire-details/fire-details.component";
import {FrInlabDetailsComponent} from "./fire-details/fr-inlab-details/fr-inlab-details.component";
import {FrOnsiteDetailsComponent} from "./fire-details/fr-onsite-details/fr-onsite-details.component";
import {FireSummaryComponent} from "./fire-summary/fire-summary.component";
import {FrInlabSummaryComponent} from "./fire-summary/fr-inlab-summary/fr-inlab-summary.component";
import {FrOnsiteSummaryComponent} from "./fire-summary/fr-onsite-summary/fr-onsite-summary.component";

const routes: Routes = [
    {
        path: 'projects',
        component: FireProjectComponent,
        children: [
            {
                path: '',
                redirectTo: 'inlab',
                pathMatch: 'full'
            },
            {
                path: 'inlab',
                component: FrInlabProjectComponent
            },
            {
                path: 'onsite',
                component: FrOnsiteProjectComponent
            }
        ]
    },
    {
        path: 'details',
        component: FireDetailsComponent,
        children: [
            {
                path: '',
                redirectTo: 'inlab',
                pathMatch: 'full'
            },
            {
                path: 'inlab',
                component: FrInlabDetailsComponent
            },
            {
                path: 'onsite',
                component: FrOnsiteDetailsComponent
            }
        ]
    },
    {
        path: 'summary',
        component: FireSummaryComponent,
        children: [
            {
                path: '',
                redirectTo: 'inlab',
                pathMatch: 'full'
            },
            {
                path: 'inlab',
                component: FrInlabSummaryComponent
            },
            {
                path: 'onsite',
                component: FrOnsiteSummaryComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FireRoutingModule{ }
