import api from './api';

//TODO: Typescript
export const getHeroes = async (): Promise<any> => {
  return api.get('heroes').catch((error: unknown) => {
    throw Error(JSON.stringify(error));
  });
};
