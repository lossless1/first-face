import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../assets/header/header.component';
import { FooterComponent } from '../assets/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RootComponent } from './root.component';
import { HomeComponent } from './home/home.component';
import { RootRouteModule } from './root.routes-module';
import { FaceComponent } from './face/face.component';
import { FaceService } from '../shared/services/face.service';
import { InfoComponent } from './face/info/info.component';
import { StubComponent } from '../assets/stub/stub.component';
import { ApiUser } from '../shared/api/api.user';
import { UserService } from '../shared/services/user.service';
import { BoardComponent } from './face/board/board.component';
import { DefaultComponent } from './face/board/default/default.component';
import { LeaderComponent } from './face/board/leader/leader.component';
import { BoardService } from '../shared/services/board.service';
import { IconsModule } from '../assets/icons/icons.module';
import { PayComponent } from './pay/pay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        RootRouteModule,
        IconsModule
    ],
    declarations: [
        RootComponent,
        FaceComponent,
        InfoComponent,
        StubComponent,
        BoardComponent,
        DefaultComponent,
        LeaderComponent,
        PayComponent
    ],
    providers: [
        UserService,
        FaceService,
        BoardService,
        ApiUser
    ],
    exports: [],
    bootstrap: [],
    entryComponents: []
})
export class RootModule {

}
