import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardsService {

	// private boards: Board[] = [];
	constructor(private boardRepository: BoardRepository) {}


	// getAllBoards(): Board[] {
	// 	return (this.boards);
	// }
	getAllBoards(): Promise<Board[]> {
		return (this.boardRepository.getAllBoards());
	}

	// createBoard(createBoardDto: CreateBoardDto): Board {
	// 	const { title, description } = createBoardDto;
	// 	const board: Board = {
	// 		id: uuid(),
	// 		title,
	// 		description,
	// 		status: BoardStatus.PUBLIC
	// 	}
	// 	this.boards.push(board);
	createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		return (this.boardRepository.createBoard(createBoardDto));
	}

	// 	return (board);
	// }

	// getBoardById(id: string): Board {
	// 	return (this.boards.find( (board) => board.id === id ));
	// }
	getBoardById(id: number): Promise <Board> {
		return (this.boardRepository.getBoardById(id));
	}

	// deleteBoard(id: string): void {
	// 	this.boards = this.boards.filter( (board: Board) => board.id !== id );
	// }
	deleteBoard(id: number): void {
		this.boardRepository.deleteBoard(id);
	}

	// updateBoardStatus(id: string, status: BoardStatus): Board {
	// 	const board = this.getBoardById(id);
	// 	board.status = status;
	// 	return (board);
	// }
	updateBoardStatus(id:number, status: BoardStatus): Promise<Board> {
		return (this.boardRepository.updateBoardStatus(id, status));
	}
}
