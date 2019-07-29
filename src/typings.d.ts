import 'styled-components';

import {
    ThemeInterface,
    ThemeColorsInterface,
    ThemeVariablesInterface
} from 'interfaces/theme-provider.interface';

/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

interface SvgrComponent
    extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: SvgrComponent;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColorsInterface;
        variables: ThemeVariablesInterface;
    }
}
