import { FunctionComponent } from "react";
import { SelectOptionProps } from "interfaces/form/select.interface";

export function groupDisplayName(
    componentGroup: string,
    delimiter: string = "."
): Function {
    return function applyDisplayNameToComponent(
        originalComponent: FunctionComponent,
        sanitize: boolean = true
    ): FunctionComponent {
        let componentName =
            originalComponent!.displayName || originalComponent!.name;

        if (sanitize) {
            componentName = componentName!.replace(componentGroup, "");
        }

        originalComponent!.displayName =
            componentGroup + delimiter + componentName;
        return originalComponent;
    };
}

export function hasValue(value: any): boolean {
    return value !== null && value !== undefined;
}

export function getDefaultValue(
    defaultValue: SelectOptionProps | any,
    options: SelectOptionProps[]
) {
    if (typeof defaultValue !== "object" && !Array.isArray(defaultValue)) {
        return options.find(option => option.value === defaultValue);
    }

    return defaultValue;
}
