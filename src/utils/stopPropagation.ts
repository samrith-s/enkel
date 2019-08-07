export function stopPropagation(e: any) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    return false;
}
