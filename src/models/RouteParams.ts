import {Hero} from './Hero';

export type RouteParams = {
  Login: undefined;
  Welcome: undefined;
  Heroes: undefined;
  Hero: {
    hero: Hero;
  };
};
