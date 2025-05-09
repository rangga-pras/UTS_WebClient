export function circleDetails(radius: number): { diameter: number, circumference: number, area: number } {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return { diameter, circumference, area };
}
