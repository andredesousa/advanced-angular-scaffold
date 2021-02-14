import { featureKey, FeatureState, initialState } from '../feature.state';
import { selectIsLoading, selectResults } from './feature.selectors';

describe('Feature Selectors', () => {
  let state: { [featureKey]: FeatureState };

  beforeEach(() => {
    state = { feature: initialState };
  });

  it('should return "isLoading" value', () => {
    expect(selectIsLoading(state)).toBe(false);
  });

  it('should return "entities" value', () => {
    expect(selectResults(state)).toEqual([]);
  });
});
