import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

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
		@Body() createBoardDto: CreateBoardDto
	): Board {
		return (this.boardsService.createBoard(createBoardDto));
	}

	@Get('/id')
	getBoardById(
		@Query('id') id: string
	): Board {
		return (this.boardsService.getBoardById(id));
	}

	@Delete()
	deleteBoard(
		@Query('id') id: string
	): void {
		this.boardsService.deleteBoard(id);
	}

	@Patch()
	updateBoardStatus(
		@Query('id') id: string,
		@Body('status') status: BoardStatus
	): Board {
		return (this.boardsService.updateBoardStatus(id, status));
	}
}
