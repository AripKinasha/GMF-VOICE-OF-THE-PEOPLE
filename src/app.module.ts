/*
LAYOUT 

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/

//SETTING UP CONNECTION TO THE POSTGRES SQL 

// app.module.ts

import { Module } from '@nestjs/common';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Replace with your PostgreSQL username
      password: '0987', // Replace with your PostgreSQL password
      database: 'task_manager', // Replace with your PostgreSQL database name
      entities: [], // Specify entities here (e.g., [Task])
      synchronize: true, // Automatically synchronize database schema with entities
    }),
  ],
  providers: [StudentService],
})
export class AppModule {}

