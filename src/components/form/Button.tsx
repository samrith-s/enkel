import { EnkelComponent } from 'interfaces';
import { ButtonProps } from 'interfaces/form/button.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { ButtonStyle } from 'styles/form/button.styles';

export const Button: EnkelComponent<ButtonProps> = ({
    component: Component,
    children,
    ...rest
}) => RenderAppropriate(ButtonStyle, rest, children, Component);

Button.Style = ButtonStyle;
