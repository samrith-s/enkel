import { EnkelComponent } from 'interfaces';
import { InputProps } from 'interfaces/form/input.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { InputStyle } from 'styles/form/input.styles';

export const Input: EnkelComponent<InputProps> = ({
    component: Component,
    children,
    ...rest
}) => RenderAppropriate(InputStyle, rest, children, Component);

Input.Style = InputStyle;
