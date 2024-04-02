export enum Shape {
	NONE = 10,
	CIRCLE = -1,
	X = 1,
}

export enum GameMode {
	EASY = 100,
	MEDIUM = 50,
	IMPOSSIBLE = 25,
	LOCAL = 0,
}

export interface IScore {
	player1: number;
	player2: number;
}

export interface IWinTrace {
	index: number;
	type: 'vertical' | 'horizontal' | 'diagonal';
}
