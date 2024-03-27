import { RootState } from '../../store';

export const gameModule = (state: RootState) => state.game;
export const selectCurrentScore = (state: RootState) => gameModule(state).score;
export const selectCurrentPrize = (state: RootState) => gameModule(state).prize;
export const selectCurrentStatus = (state: RootState) => gameModule(state).status;
