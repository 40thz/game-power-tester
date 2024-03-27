import Background from '@/assets/images/bg_top.png';
import RobotDefault from '@/assets/images/robot_1.svg';
import RobotPending from '@/assets/images/robot_2.svg';
import RobotPrize from '@/assets/images/robot_3.svg';
import Button from '@/assets/images/button.png';
import ButtonActive from '@/assets/images/button_active.png';
import Hammer from '@/assets/images/hammer.png';
import Prize from '@/assets/images/prize.png';
import Layer from '@/assets/images/layer_glow.png';
import Scale from '@/assets/images/scale-1.png';
import Measure from '@/assets/images/measure_main.png';

export const POWER_PROGRESSBAR_FPS = 60;

export enum ImageNames {
  Background = 'background',

  RobotDefault = 'robot_default',
  RobotPending = 'robot_pending',
  RobotPrize = 'robot_prize',

  Button = 'button',
  ButtonActive = 'button_active',
  Hammer = 'hammer',

  Prize = 'prize',
  Layer = 'layer',

  Scale = 'scale',
  Measure = 'measure',
}
export const ImageResourcesMap: Record<ImageNames, string> = {
  [ImageNames.Background]: Background,

  [ImageNames.RobotDefault]: RobotDefault,
  [ImageNames.RobotPending]: RobotPending,
  [ImageNames.RobotPrize]: RobotPrize,

  [ImageNames.Button]: Button,
  [ImageNames.ButtonActive]: ButtonActive,
  [ImageNames.Hammer]: Hammer,

  [ImageNames.Prize]: Prize,
  [ImageNames.Layer]: Layer,

  [ImageNames.Scale]: Scale,
  [ImageNames.Measure]: Measure,
} as const;
