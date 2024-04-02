export function clampCloak(value: number, min: number, max: number): number {
	if (value > max) value = min;
	else if (value < min) value = max;

	return value;
}
