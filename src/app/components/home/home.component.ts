import { Component } from '@angular/core';
import {
	CircleIcon,
	LucideAngularModule,
	RotateCcwIcon,
	XIcon,
} from 'lucide-angular';
import { deepCopy } from '../../../utils/deepCopy';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { GameOverScreenComponent } from '../game-over-screen/game-over-screen.component';
import { PlayerScoreComponent } from '../player-score/player-score.component';
import { GameMode, IScore, IWinTrace, Shape } from './home.interfaces';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		LucideAngularModule,
		ButtonComponent,
		PlayerScoreComponent,
		GameOverScreenComponent,
		FooterComponent,
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	private lockTurn: boolean = true;
	private remainingSpaces: number = 9;

	protected readonly areas: number[] = [0, 1, 2];
	// icones
	protected readonly XIcon = XIcon;
	protected readonly CircleIcon = CircleIcon;
	protected readonly ResetIcon = RotateCcwIcon;
	// interfaces
	protected readonly Shape = Shape;
	protected readonly GameMode = GameMode;

	protected matrix3b3: number[][] = [];
	protected startTrigger: boolean = false;
	protected winner: Shape | undefined;
	protected winTrace: IWinTrace | undefined;
	protected draw: boolean = false;
	protected gameMode: GameMode = GameMode.MEDIUM;
	protected score: IScore = { player1: 0, player2: 0 };
	protected doesPlayer1Starts: boolean = false;
	protected isPlayer1Turn: boolean = false;

	constructor() {
		this.start();
	}

	start() {
		// reinicia a animação da grade
		this.startTrigger = false;
		setTimeout(() => {
			this.startTrigger = true;
		}, 50);

		this.winner = undefined;
		this.winTrace = undefined;
		this.draw = false;
		this.doesPlayer1Starts = !this.doesPlayer1Starts;
		this.isPlayer1Turn = this.doesPlayer1Starts;
		this.lockTurn = true;
		this.matrix3b3 = new Array(3).fill(10).map((_) => Array(3).fill(10));
		this.remainingSpaces = 9;

		// delay para esperar a grade ser desenhada no html
		setTimeout(() => {
			if (!this.isPlayer1Turn && this.gameMode !== GameMode.LOCAL) this.bot();
			else this.lockTurn = false;
		}, 850);
	}

	restart() {
		this.score = { player1: 0, player2: 0 };
		this.start();
	}

	// altera o modo de jogo pelo input select
	setGameModeByInput(event: Event): void {
		const target = event.target as HTMLSelectElement;
		this.gameMode = Number(target.value);
		this.restart();
	}

	getCurrentShape() {
		return this.isPlayer1Turn ? Shape.X : Shape.CIRCLE;
	}

	setWinner(winner: Shape) {
		setTimeout(() => {
			this.winner = winner;
		}, 400); // delay para vizualizar resultados
	}

	// informa se a jogada realizada gera uma vitória
	isGameOver(board: number[][], checkWithShape?: number): boolean {
		const currentShape = checkWithShape ?? this.getCurrentShape();
		const positions = [...this.areas];

		// checa se houve/haverá uma vitória na horizontal
		for (let i = 0; i < board.length; i++) {
			if (
				board[i][0] === currentShape &&
				board[i][1] === currentShape &&
				board[i][2] === currentShape
			) {
				this.winTrace = {
					index: i,
					type: 'horizontal',
				};
				return true;
			}
		}

		// checa se houve/haverá uma vitória na vertical
		for (let i = 0; i < board.length; i++) {
			if (
				board[0][i] === currentShape &&
				board[1][i] === currentShape &&
				board[2][i] === currentShape
			) {
				this.winTrace = {
					index: i,
					type: 'vertical',
				};
				return true;
			}
		}

		// checa se houve/haverá uma vitória na diagonal
		for (let i = 0; i < 2; i++) {
			if (
				board[0][positions[0]] === currentShape &&
				board[1][positions[1]] === currentShape &&
				board[2][positions[2]] === currentShape
			) {
				this.winTrace = {
					index: i,
					type: 'diagonal',
				};
				return true;
			}
			positions.reverse();
		}

		return false;
	}

	setSpace(row: number, col: number, isBot: boolean = false) {
		if (this.winner) return;
		if (this.matrix3b3[row][col] !== Shape.NONE) return;
		if (this.lockTurn && !isBot) return;
		this.lockTurn = true;

		const currentShape = this.getCurrentShape();

		this.matrix3b3[row][col] = currentShape;
		this.remainingSpaces--;

		// verifica se a jogada realizada gera uma vitória, se sim define o vencedor da partida e incrementa sua pontuação
		if (this.isGameOver(this.matrix3b3)) {
			this.setWinner(currentShape);

			if (this.isPlayer1Turn) this.score.player1++;
			else this.score.player2++;

			return;
		}

		// caso não aja mais espaços para serem marcados e ninguém venceu, é declarado empate
		if (this.remainingSpaces <= 0) {
			setTimeout(() => {
				this.draw = true;
			}, 500); // delay para vizualizar resultados
			return;
		}

		// caso o modo de jogo seja 2 jogadores passa a vez para o próximo e retorna
		if (this.gameMode === GameMode.LOCAL) {
			this.isPlayer1Turn = !this.isPlayer1Turn;
			this.lockTurn = false;
			return;
		}

		// caso tenha sido feito uma jogada pelo jogador, é realizada outra pelo bot
		if (!isBot) {
			this.isPlayer1Turn = false;

			setTimeout(() => {
				this.bot();
			}, 400); //delay da jogada

			return;
		}

		this.isPlayer1Turn = true;
		this.lockTurn = false;
	}

	shouldBotPerformThisAction(): boolean {
		// Dificuldades:
		// Fácil: 75% de chance de NÃO realizar a ação  (0-100 <= 25)
		// Médio: 50% de chance de NÃO realizar a ação (0-50 <= 25)
		// Impossível: 0% de chance de NÃO realizar a ação (0-25 <= 25)
		return Math.round(Math.random() * this.gameMode) <= 25;
	}

	bot() {
		if (this.remainingSpaces <= 0) return;

		// checa se é possivel fazer um movimento vitorioso e se sim faze-lo
		// antes é feito um sorteio com base no modo de jogo escolhido para determinar se será realizado essa ação
		if (this.shouldBotPerformThisAction()) {
			for (let row = 0; row < 3; row++) {
				for (let col = 0; col < 3; col++) {
					if (this.matrix3b3[row][col] !== Shape.NONE) continue;

					const nextBoard = deepCopy(this.matrix3b3);
					nextBoard[row][col] = this.getCurrentShape();

					if (this.isGameOver(nextBoard)) {
						this.setSpace(row, col, true);
						return;
					}
				}
			}
		}

		// checar se o jogador pode vencer e impedi-lo se sim
		// antes é feito um sorteio com base no modo de jogo escolhido para determinar se será realizado essa ação
		if (this.gameMode !== GameMode.EASY || this.shouldBotPerformThisAction()) {
			for (let row = 0; row < 3; row++) {
				for (let col = 0; col < 3; col++) {
					if (this.matrix3b3[row][col] !== Shape.NONE) continue;

					const nextBoard = deepCopy(this.matrix3b3);
					nextBoard[row][col] = Shape.X;

					if (this.isGameOver(nextBoard, Shape.X)) {
						this.setSpace(row, col, true);
						return;
					}
				}
			}
		}

		// jogada estratégica
		while (true) {
			// preenche o meio se vazio
			// antes é feito um sorteio com base no modo de jogo escolhido para determinar se será realizado essa ação
			if (this.shouldBotPerformThisAction()) {
				if (this.matrix3b3[1][1] === Shape.NONE) {
					this.setSpace(1, 1, true);
					break;
				}
			}

			// se o jogador marcar duas diagonais opostas, preenche uma lateral do meio, evitando uma jogada vitoriosa dele
			// antes é feito um sorteio com base no modo de jogo escolhido para determinar se será realizado essa ação
			if (this.shouldBotPerformThisAction()) {
				if (
					(this.matrix3b3[0][0] === Shape.X &&
						this.matrix3b3[2][2] === Shape.X) ||
					(this.matrix3b3[0][2] === Shape.X && this.matrix3b3[2][0] === Shape.X)
				) {
					const direction = Math.round(Math.random()) > 0 ? 1 : -1;
					const row = Math.round(Math.random()) * direction;
					const col = (row !== 0 ? 0 : 1) * direction;

					if (this.matrix3b3[row + 1][col + 1] !== Shape.NONE) continue;
					this.setSpace(row + 1, col + 1, true);
					break;
				}
			}

			// se o meio já foi ocupado continua preenchendo as bordas restantes
			// antes é feito um sorteio com base no modo de jogo escolhido para determinar se será realizado essa ação
			if (this.shouldBotPerformThisAction()) {
				if (
					this.matrix3b3[0][0] === Shape.NONE ||
					this.matrix3b3[0][2] === Shape.NONE ||
					this.matrix3b3[2][0] === Shape.NONE ||
					this.matrix3b3[2][2] === Shape.NONE
				) {
					if (this.matrix3b3[1][1] !== Shape.NONE) {
						const row = Math.round(Math.random()) * 2;
						const col = Math.round(Math.random()) * 2;

						if (this.matrix3b3[row][col] !== Shape.NONE) continue;
						this.setSpace(row, col, true);
						break;
					}
				}
			}

			const row = Math.round(Math.random() * 2);
			const col = Math.round(Math.random() * 2);

			if (this.matrix3b3[row][col] !== Shape.NONE) continue;

			this.setSpace(row, col, true);
			break;
		}
	}
}
