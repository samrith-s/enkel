import { FunctionComponent } from "react";

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
