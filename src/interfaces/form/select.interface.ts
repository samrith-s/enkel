import { ComponentCommons } from 'interfaces';

export type SelectProps = ComponentCommons & {
    options?: SelectOptionProps[];
    optionRenderer?: Function;
    onChange: Function;
    value?: SelectOptionProps;
    searchable?: boolean;
    inputComponent?: Function;
    menuComponent?: Function;
    menuItemComponent?: Function;
};

export interface SelectOptionProps {
    value: any;
    label: string;
}

export interface SelectStyleProps {}

export interface SelectInputStyleProps {
    menuIsOpen?: boolean;
}

export interface SelectMenuItemStyleProps {
    isSelected?: boolean;
    isHighlighted?: boolean;
}
