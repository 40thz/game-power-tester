import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAME_STATUS, GameState, Prize } from './types';

export const initialState: GameState = {
  status: GAME_STATUS.STOP,
  prize: null,
  score: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start(state) {
      state.status = GAME_STATUS.START;
    },

    reset(state) {
      state.status = GAME_STATUS.START;
      state.prize = null;
      state.score = 0;
    },

    finished(state) {
      state.status = GAME_STATUS.FINISH;
    },

    hitToButton(state) {
      state.status = GAME_STATUS.HIT;
    },

    setPrize(state, action: PayloadAction<Prize | null>) {
      state.prize = action.payload;
    },

    updateScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
  },
});

export const { updateScore, start, reset, hitToButton, finished, setPrize } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
