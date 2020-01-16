// import React from 'react';
import React, {
    useState,
    useRef,
    useEffect,
    SyntheticEvent,
    KeyboardEvent,
    ChangeEvent
} from "react";

import { EnkelComponent } from "interfaces";
import {
    SelectProps,
    SelectOptionProps
} from "interfaces/form/select.interface";

import { stopPropagation } from "utils/stopPropagation";

import {
    SelectStyle,
    SelectInputStyle,
    SelectMenuStyle,
    SelectMenuItemStyle
} from "styles/form/select.styles";
import { hasValue } from "utils";

export const Select: EnkelComponent<SelectProps> = ({
    children,
    component: Component,
    inputComponent: InputComponent,
    menuComponent: MenuComponent,
    menuItemComponent: MenuItemComponent,
    options = [],
    optionRenderer,
    onChange,
    placeholder,
    searchable,
    name,
    closeOnSelect = true,
    value: propsValue,
    defaultValue,
    ...rest
}): JSX.Element => {
    const [value, setValue] = useState(propsValue || null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [search, setSearch] = useState("");
    const [filteredOptions, setOptions] = useState(options);
    const [showMenu, setMenuDisplay] = useState(false);
    const thisRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const optionRefs: any[] = [];

    const SelectComponent = Component || SelectStyle;
    const SelectInputComponent = InputComponent || SelectInputStyle;
    const SelectMenuComponent = MenuComponent || SelectMenuStyle;
    const SelectMenuItemComponent = MenuItemComponent || SelectMenuItemStyle;

    const defaultRenderer: Function = (
        option: SelectOptionProps
    ): JSX.Element => (
        <SelectMenuItemComponent>{option.label}</SelectMenuItemComponent>
    );

    const handleReset: Function = (
        closeMenu: boolean = false,
        selectedValue?: SelectOptionProps
    ): void => {
        closeMenu && setMenuDisplay(false);
        const index = options.findIndex(option => {
            if (selectedValue) {
                return option.value === selectedValue.value;
            } else if (value) {
                return option.value === value.value;
            } else if (defaultValue) {
                return option.value === defaultValue.value;
            }

            return false;
        });

        setCurrentScroll(index !== -1 ? index : 0);
    };

    const handleChange = (selectedValue: SelectOptionProps): Function => (
        e: SyntheticEvent
    ): void => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setValue(selectedValue);
        onChange && onChange(value);
        handleReset(closeOnSelect, selectedValue);
        setSearch("");
    };

    const handleFocus = (e: SyntheticEvent): void => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setMenuDisplay(true);
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleRootEscape: Function = (e: KeyboardEvent): void => {
        if (showMenu && e.key === "Escape") {
            handleReset(true);
        }
    };

    const handleRootClose: Function = (e: SyntheticEvent): void => {
        if (
            showMenu &&
            thisRef.current &&
            !thisRef.current.contains(e.target as Node)
        ) {
            handleReset(true);
        }
    };

    const handleKeyDown = (e: KeyboardEvent): boolean => {
        e.persist();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        let arrow =
            e.key === "ArrowUp" || e.key === "ArrowDown" ? e.key : false;

        if (filteredOptions) {
            let scrollValue = currentScroll;
            if (arrow) {
                if (arrow === "ArrowUp" && currentScroll > 0) {
                    scrollValue--;
                }

                if (
                    arrow === "ArrowDown" &&
                    currentScroll < filteredOptions.length - 1
                ) {
                    scrollValue++;
                }

                setCurrentScroll(scrollValue);
                optionRefs[scrollValue].scrollIntoView({
                    block: "nearest"
                });
            }

            if (e.key === "Enter") {
                handleChange(filteredOptions[scrollValue])(e);
            }

            return true;
        }

        return false;
    };

    const handleMouseOver = (index: number): Function => (): void => {
        setCurrentScroll(index);
    };

    const handleMouseOut = (): void => {
        handleReset();
    };

    const handleRef = (ref: any): void => {
        optionRefs.push(ref);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void =>
        setSearch(e.target.value);

    useEffect(() => {
        document.addEventListener(
            "click",
            handleRootClose as EventListener,
            true
        );
        document.addEventListener(
            "keyup",
            handleRootEscape as EventListener,
            true
        );
        return (): void => {
            document.removeEventListener(
                "click",
                handleRootClose as EventListener,
                true
            );
            document.removeEventListener(
                "keyup",
                handleRootEscape as EventListener,
                true
            );
        };
    }, [showMenu]);

    useEffect(() => {
        if (search) {
            const lowerCaseSearch = search.replace(/\s/g, "").toLowerCase();
            setOptions(
                options.filter(
                    ({ value, label }) =>
                        value
                            .toString()
                            .toLowerCase()
                            .replace(/\s/g, "")
                            .includes(lowerCaseSearch) ||
                        label
                            .toString()
                            .toLowerCase()
                            .replace(/\s/g, "")
                            .includes(lowerCaseSearch)
                )
            );
            setCurrentScroll(0);
        } else {
            setOptions(options);
        }
    }, [search]);

    const renderer: Function = optionRenderer || defaultRenderer;

    const getAppropriateValue = (): SelectOptionProps => {
        const inputValues: SelectOptionProps = {
            value: "",
            label: ""
        };

        if (value && hasValue(value.value)) {
            inputValues.label = value.label;
            inputValues.value = value.value;
        } else if (defaultValue && hasValue(defaultValue.value)) {
            inputValues.label = defaultValue.label;
            inputValues.value = defaultValue.value;
        }

        if (showMenu && searchable && hasValue(search)) {
            inputValues.label = search;
        }

        return inputValues;
    };

    const {
        value: trueValue,
        label: trueLabel
    }: SelectOptionProps = getAppropriateValue();

    return (
        <SelectComponent
            {...rest}
            className="select"
            ref={thisRef}
            onClick={handleFocus}
            onMouseOut={handleMouseOut}
        >
            <SelectInputComponent
                type="text"
                readOnly={!searchable}
                placeholder={placeholder || "Select something.."}
                ref={inputRef}
                value={trueLabel}
                menuIsOpen={showMenu}
                onKeyDown={handleKeyDown}
                onKeyUp={stopPropagation}
                onKeyPress={stopPropagation}
                onChange={handleSearch}
            />
            <input type="hidden" value={trueValue} name={name} />
            {showMenu && options && (
                <SelectMenuComponent>
                    {filteredOptions.map((option, index) =>
                        React.cloneElement(renderer(option, index), {
                            onClick: handleChange(option),
                            onMouseOver: handleMouseOver(index),
                            key: `enkel-select-option-${index}`,
                            isSelected: trueValue === option.value,
                            isHighlighted: currentScroll === index,
                            ref: handleRef
                        })
                    )}
                </SelectMenuComponent>
            )}
        </SelectComponent>
    );
};

Select.Style = {
    Main: SelectStyle,
    Input: SelectInputStyle,
    Menu: SelectMenuStyle,
    MenuItem: SelectMenuItemStyle
};
