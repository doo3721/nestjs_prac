import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";

@Injectable()
export class BoardRepository extends Repository<Board> {
	constructor(private dataSource: DataSource) {
		super(Board, dataSource.createEntityManager());
	}

	async getAllBoards(): Promise<Board[]> {
		return (await this.find());
	}

	async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		const { title, description } = createBoardDto;

		const board = this.create({
			title,
			description,
			status: BoardStatus.PUBLIC
		})

		await this.save(board);
		return (board);
	}

	async getBoardById(id: number): Promise <Board> {
		const found = await this.findOneBy({id});

		if (!found) {
			throw new NotFoundException(`Can't Not Found Id ${id}`);
		}

		return (found);
	}

	async deleteBoard(id: number): Promise<void> {
		const result = await this.delete(id);

		if (result.affected === 0) {
			throw new NotFoundException(`Can't Not Found Id ${id}`);
		}
	}

	async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
		const board = await this.getBoardById(id);

		board.status = status;
		await this.save(board);
		return (board);
	}
}
