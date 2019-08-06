export function getAspectRatio(ratio: string): Number {
    const [xAspect, yAspect] = ratio
        .split(/:|\//)
        .map(o => parseInt(o, 10) || 1);

    const ratioValue: number = yAspect / xAspect;
    const ratioSize: number = ratioValue * 100;

    return ratioSize;
}
