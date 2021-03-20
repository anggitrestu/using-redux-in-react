// dari react app di teruskan dengan fungsi dispatch ke action
import { BUY_CAKE } from './cakeTypes';

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
