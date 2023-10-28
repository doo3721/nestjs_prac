import { Body, Controller, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
// import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
	// dependency injection (컨트롤러에서 서비스 이용할 수 있게 하기)
	constructor(private boardsService: BoardsService) {}

	// @Get()
	// getAllBoards(): Board[] {
	// 	return (this.boardsService.getAllBoards());
	// }
	@Get()
	getAllBoards(): Promise<Board[]> {
		return (this.boardsService.getAllBoards());
	}

	// @Post()
	// createBoard(
	// 	@Body() createBoardDto: CreateBoardDto
	// ): Board {
	// 	return (this.boardsService.createBoard(createBoardDto));
	// }
	@Post()
	@UsePipes(ValidationPipe)
	createBoard(
		@Body() createBoardDto: CreateBoardDto
	): Promise<Board> {
		return (this.boardsService.createBoard(createBoardDto));
	}

	// @Get('/id')
	// getBoardById(
	// 	@Query('id') id: string
	// ): Board {
	// 	return (this.boardsService.getBoardById(id));
	// }
	@Get('/:id')
	getBoardById(
		@Param('id') id: number
	): Promise<Board> {
		return (this.boardsService.getBoardById(id));
	}

	// @Delete()
	// deleteBoard(
	// 	@Query('id') id: string
	// ): void {
	// 	this.boardsService.deleteBoard(id);
	// }
	@Delete('/:id')
	deleteBoard(
		@Param('id') id: number
	): void {
		this.boardsService.deleteBoard(id);
	}

	// @Patch()
	// updateBoardStatus(
	// 	@Query('id') id: string,
	// 	@Body('status') status: BoardStatus
	// ): Board {
	// 	return (this.boardsService.updateBoardStatus(id, status));
	// }
	@Post('/:id/status')
	updateBoardStatus(
		@Param('id') id: number,
		@Body('status', BoardStatusValidationPipe) status: BoardStatus
	): Promise<Board> {
		return (this.boardsService.updateBoardStatus(id, status));
	}
}
