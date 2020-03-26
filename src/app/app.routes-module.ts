import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './assets/error/page.not.found.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './root/home/home.component';
import { NgModule } from '@angular/core';
import { RootComponent } from './root/root.component';
import { FaceComponent } from './root/face/face.component';
import { InfoComponent } from './root/face/info/info.component';
import { PayComponent } from './root/pay/pay.component';
import { DefaultComponent } from './root/face/board/default/default.component';
import { LeaderComponent } from './root/face/board/leader/leader.component';
import { BoardComponent } from './root/face/board/board.component';

export const ROUTES: Routes = [{
    path: '',
    component: RootComponent,
    data: {state: 'root'},
    children: [{
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
                },
                {
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

}, {
    path: '**', component: PageNotFoundComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {useHash: false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {

}
