export function getAspectRatio(size: number, ratio: string): Number[] {
    const [xAspect, yAspect]: number[] = ratio
        .split(/:|\//)
        .map(o => parseInt(o, 10));

    let ratioValue: number = yAspect / xAspect;
    let xValue: number = size,
        yValue: number = ratioValue * 100;

    if (xAspect < yAspect) {
        ratioValue = xAspect / yAspect;
        xValue = yValue;
        yValue = ratioValue * 100;
    }

    return [xValue || 0, yValue || 0];
}
