import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'example',
  password: 'example',
  database: 'ideas',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
  logging: true,
};
