import { User } from '@api/users/models';

export interface FeatureState {
  isLoading: boolean;
  entities: User[];
}

export const initialState: FeatureState = {
  isLoading: false,
  entities: [],
};

export const featureKey = 'feature';
