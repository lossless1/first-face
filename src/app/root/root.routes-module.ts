import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceComponent } from './face/face.component';
import { InfoComponent } from './face/info/info.component';
import { StubComponent } from '../assets/stub/stub.component';
import { LeaderComponent } from './face/board/leader/leader.component';
import { DefaultComponent } from './face/board/default/default.component';
import { BoardComponent } from './face/board/board.component';
import { PayComponent } from './pay/pay.component';
import { RootComponent } from './root.component';

export const ROUTES: Routes = [
    {
        // path: '',
        // component: RootComponent,
        // children: [{
        path: '',
        redirectTo: '10',
        pathMatch: 'full'
    }, {
        path: 'become',
        component: PayComponent,
        data: {state: 'become'}
    }, {
        path: ':id',
        component: FaceComponent,
        data: {state: 'face'},
        children: [{
            path: 'board',
            component: BoardComponent,
            children: [
                {
                    path: ':id',
                    component: LeaderComponent,
                    data: {state: 'RtoL'}
                }, {
                    path: '',
                    component: DefaultComponent,
                    data: {state: 'RtoL'}
                },
            ],
            data: {state: 'LtoR'}
        }, {
            path: 'info',
            component: InfoComponent,
            data: {state: 'info'}
        }],
    }]

// }


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class RootRouteModule {

}
