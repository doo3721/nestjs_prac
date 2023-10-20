import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
	// dependency injection (컨트롤러에서 서비스 이용할 수 있게 하기)
	constructor(private boardsService: BoardsService) {}

	@Get()
	getAllBoards(): Board[] {
		return (this.boardsService.getAllBoards());
	}

	@Post()
	createBoard(
		@Body('title') title: string,
		@Body('description') description: string,
	): Board {
		return (this.boardsService.createBoard(title, description));
	}
}
