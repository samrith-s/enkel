import { ComponentCommons } from 'interfaces';

export type AspectRatioProps = ComponentCommons &
    AspectRatioStyleProps & {
        ratio?: string;
        size?: string;
        innerStyle?: Object;
    };

export interface AspectRatioStyleProps {
    width: string;
}

export interface AspectRatioWrapperStyleProps {
    height: string;
}
