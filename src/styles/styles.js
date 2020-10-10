import { ThemeStyles } from './theme/_all';
import { ComponentStyles } from './component/_all';
import { ScreenStyles } from './screens/_all';
import * as DefaultStyles from './misc/defaults';

export const Styles = Object.assign({}, ThemeStyles, ComponentStyles, DefaultStyles, ScreenStyles);