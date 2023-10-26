import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {

	// private boards: Board[] = [];
	constructor(
		@InjectRepository(Board)
		private boardRepository: BoardRepository
	) {}


	// getAllBoards(): Board[] {
	// 	return (this.boards);
	// }

	// createBoard(createBoardDto: CreateBoardDto): Board {
	// 	const { title, description } = createBoardDto;
	// 	const board: Board = {
	// 		id: uuid(),
	// 		title,
	// 		description,
	// 		status: BoardStatus.PUBLIC
	// 	}
	// 	this.boards.push(board);
	async createBoard(createBoardDto: CreateBoardDto): Promise <Board> {
		return (this.boardRepository.createBoard(createBoardDto));
	}

	// 	return (board);
	// }

	// getBoardById(id: string): Board {
	// 	return (this.boards.find( (board) => board.id === id ));
	// }
	async getBoardById(id: number): Promise <Board> {
		return (this.boardRepository.getBoardById(id));
	}

	// deleteBoard(id: string): void {
	// 	this.boards = this.boards.filter( (board: Board) => board.id !== id );
	// }

	// updateBoardStatus(id: string, status: BoardStatus): Board {
	// 	const board = this.getBoardById(id);
	// 	board.status = status;
	// 	return (board);
	// }
}
