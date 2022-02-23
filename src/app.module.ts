import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: 'postgres://wbzezzzv:KKw77qK4ZItd7PfnhrMxMeNaU1jOKUsf@arjuna.db.elephantsql.com/wbzezzzv',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [User],
    }),
    CategoryModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class AppModule {}
