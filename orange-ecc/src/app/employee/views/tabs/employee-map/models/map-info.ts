import { Point } from './point';
import { MarkerInfo } from './marker-info';

export interface MapInfo {
  markers: MarkerInfo[];
  array: string;
  exits: Point[];
}
