import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translate(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (translate),
                deps: [HttpClient]
            }
        }),
    ],
    exports: [
        TranslateModule
    ]
})
export class TranslationModule {
    constructor() {

    }
}
