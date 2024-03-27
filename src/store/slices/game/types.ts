export enum GAME_STATUS {
  START = 'START',
  STOP = 'STOP',
  HIT = 'HIT',
  FINISH = 'FINISH',
}

export type Prize = {
  image: string;
  name: string;
};

export type GameState = {
  status: GAME_STATUS;
  prize: Prize | null;
  score: number;
};
