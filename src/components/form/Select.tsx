// import React from 'react';
import React, {
    useState,
    useRef,
    useEffect,
    SyntheticEvent,
    KeyboardEvent
} from 'react';

import { EnkelComponent } from 'interfaces';
import {
    SelectProps,
    SelectOptionProps
} from 'interfaces/form/select.interface';

import { stopPropagation } from 'utils/stopPropagation';

import {
    SelectStyle,
    SelectInputStyle,
    SelectMenuWrapperStyle,
    SelectMenuItemStyle
} from 'styles/form/select.styles';

const SelectDefaultState = {
    value: '',
    label: ''
};

export const Select: EnkelComponent<SelectProps> = ({
    children,
    component: Component,
    options,
    optionRenderer,
    onChange,
    searchable,
    value: propsValue,
    ...rest
}) => {
    const [value, setValue] = useState(propsValue || { ...SelectDefaultState });
    const [currentScroll, setCurrentScroll] = useState(0);
    // const [search, setSearch] = useState('');
    const [showMenu, setMenuDisplay] = useState(false);
    const thisRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const optionRefs: any[] = [];

    const defaultRenderer: Function = (option: SelectOptionProps) => (
        <SelectMenuItemStyle>{option.label}</SelectMenuItemStyle>
    );

    const handleChange = (selectedValue: SelectOptionProps) => (
        e: SyntheticEvent
    ) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setValue(selectedValue);
        onChange && onChange(value);
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

        if (options) {
            let scrollValue = currentScroll;

            if (e.key === 'ArrowUp' && currentScroll > 0) {
                scrollValue--;
            }

            if (
                e.key === 'ArrowDown' &&
                options &&
                currentScroll < options.length - 1
            ) {
                scrollValue++;
            }

            setCurrentScroll(scrollValue);
            optionRefs[scrollValue].scrollIntoView({
                block: 'nearest'
            });

            if (e.key === 'Enter') {
                handleChange(options[scrollValue])(e);
                setMenuDisplay(false);
            }
        }

        return false;
    };

    const handleMouseOver = (index: number) => () => {
        setCurrentScroll(index);
    };

    const handleRef = (ref: any) => optionRefs.push(ref);

    useEffect(() => {
        document.addEventListener('click', handleRootClose as EventListener);
        return () =>
            document.removeEventListener(
                'click',
                handleRootClose as EventListener
            );
    }, [showMenu]);

    useEffect(() => {
        if (!showMenu) {
            setCurrentScroll(0);
        }
    }, [showMenu]);

    const renderer: Function = optionRenderer || defaultRenderer;

    return (
        <SelectStyle
            {...rest}
            className="select"
            ref={thisRef}
            onClick={handleFocus}
        >
            <SelectInputStyle
                type="text"
                readOnly={!searchable}
                placeholder="Select something..."
                ref={inputRef}
                value={value.label}
                menuIsOpen={showMenu}
                onKeyDown={handleKeyDown}
                onKeyUp={stopPropagation}
                onKeyPress={stopPropagation}
            />
            {showMenu && options && (
                <SelectMenuWrapperStyle>
                    {options.map((option, index) =>
                        React.cloneElement(renderer(option, index), {
                            onClick: handleChange(option),
                            onMouseOver: handleMouseOver(index),
                            key: `enkel-select-option-${index}`,
                            isSelected: value.value === option.value,
                            isHighlighted: currentScroll === index,
                            ref: handleRef
                        })
                    )}
                </SelectMenuWrapperStyle>
            )}
        </SelectStyle>
    );
};

Select.Style = {
    Main: SelectStyle,
    Input: SelectInputStyle,
    Menu: SelectMenuWrapperStyle,
    MenuItem: SelectMenuItemStyle
};
