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

const SelectDefaultState = {
    value: "",
    label: ""
};

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
    value: propsValue,
    ...rest
}) => {
    const [value, setValue] = useState(propsValue || { ...SelectDefaultState });
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

    const defaultRenderer: Function = (option: SelectOptionProps) => (
        <SelectMenuItemComponent>{option.label}</SelectMenuItemComponent>
    );

    const handleChange = (selectedValue: SelectOptionProps) => (
        e: SyntheticEvent
    ) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setValue(selectedValue);
        onChange && onChange(value);
        setMenuDisplay(false);
        setSearch("");
    };

    const handleFocus = (e: SyntheticEvent) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setMenuDisplay(true);
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleRootClose: Function = (e: SyntheticEvent) => {
        if (
            showMenu &&
            thisRef.current &&
            !thisRef.current.contains(e.currentTarget)
        ) {
            setMenuDisplay(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
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
        }

        return false;
    };

    const handleMouseOver = (index: number) => () => {
        setCurrentScroll(index);
    };

    const handleRef = (ref: any) => optionRefs.push(ref);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    useEffect(() => {
        document.addEventListener("click", handleRootClose as EventListener);
        return () =>
            document.removeEventListener(
                "click",
                handleRootClose as EventListener
            );
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

    const getAppropriateValue = () =>
        searchable && showMenu ? search : value.label;

    return (
        <SelectComponent
            {...rest}
            className="select"
            ref={thisRef}
            onClick={handleFocus}
        >
            <SelectInputComponent
                type="text"
                readOnly={!searchable}
                placeholder={placeholder || "Select something.."}
                ref={inputRef}
                value={getAppropriateValue()}
                menuIsOpen={showMenu}
                onKeyDown={handleKeyDown}
                onKeyUp={stopPropagation}
                onKeyPress={stopPropagation}
                onChange={handleSearch}
            />
            {showMenu && options && (
                <SelectMenuComponent>
                    {filteredOptions.map((option, index) =>
                        React.cloneElement(renderer(option, index), {
                            onClick: handleChange(option),
                            onMouseOver: handleMouseOver(index),
                            key: `enkel-select-option-${index}`,
                            isSelected: value.value === option.value,
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
