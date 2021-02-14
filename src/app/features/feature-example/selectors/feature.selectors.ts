import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureState, featureKey } from '../feature.state';

const selectFeatureState = createFeatureSelector<FeatureState>(featureKey);

export const selectIsLoading = createSelector(selectFeatureState, state => state.isLoading);

export const selectResults = createSelector(selectFeatureState, state => state.entities);
