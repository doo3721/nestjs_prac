import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'postgresql',
	port: 5432,
	username: 'ts_user',
	password: 'ts_pass',
	database: 'ts_db',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	// 데이터 입력(동기화)를 위해서는 반드시 true로 해야한다 (migragion이 없으면)
	synchronize: true
}
