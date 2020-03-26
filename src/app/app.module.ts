/**
 * Modules
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HoldingModule } from "./holding/holding.module";
import { HttpClientModule } from "@angular/common/http";
import { CatalogModule } from "./catalog/catalog.module";
import { AuthModule } from "./auth/auth.module";
import { RootModule } from "./root/root.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/**
 * Environment
 */
import { environment } from "environments/environment";

/**
 * Routes
 */
import { AppRoutesModule, ROUTES } from "./app.routes-module";

/**
 * App is our top level component
 */
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { APP_BASE_HREF } from "@angular/common";

/**
 * Components
 */
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./assets/error/page.not.found.component";

/**
 * Services
 */
import { AppService } from "./shared/services/app.service";
import { HttpCustomService } from "./shared/http.custom.service";
import "../styles/styles.scss";

/**
 * Guards
 */
import { AppGuard } from "./shared/services/app.guard";

/**
 * Interceptors
 */
import { AppInterceptor } from "./shared/services/app.interceptor";
import { TranslationModule } from "./shared/modules/translation.module";
import { HeaderComponent } from "./assets/header/header.component";
import { FooterComponent } from "./assets/footer/footer.component";
import { RouteReuseStrategy } from "@angular/router";

/**
 * Utils
 */
import { CustomStrategy } from "./shared/utils/route.strategy.util";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslationModule,
        RootModule,
        AppRoutesModule
    ],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    exports: [],
    providers: [
        environment.ENV_PROVIDERS,
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: RouteReuseStrategy, useClass: CustomStrategy },
        AppGuard,
        AppInterceptor,
        AppService,
        HttpCustomService
    ]
})
export class AppModule {}
