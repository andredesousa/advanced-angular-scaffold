import { ApiModule as UsersApiModule } from '@api/users/api.module';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExternalModules, environment } from '../environments/environment';
import { FeatureModule } from './features/feature-example/feature.module';
import { SharedModule } from './shared/shared.module';
import { LazyTranslateLoader, Languages } from './app.config';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot(),
    ExternalModules,
    FeatureModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}),
    TranslateModule.forRoot({
      defaultLanguage: Languages.EN,
      loader: {
        provide: TranslateLoader,
        useClass: LazyTranslateLoader,
      },
    }),
    UsersApiModule.forRoot({ rootUrl: environment.usersApi }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
