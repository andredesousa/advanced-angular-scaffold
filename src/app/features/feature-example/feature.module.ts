import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeatureRoutingModule } from './feature-routing.module';
import { featureReducer } from './reducers/feature.reducers';
import { featureKey } from './feature.state';
import { FeatureEffects } from './effects/feature.effects';
import { UsersComponent } from './containers/users.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([FeatureEffects]),
  ],
  declarations: [UsersComponent],
})
export class FeatureModule {}
