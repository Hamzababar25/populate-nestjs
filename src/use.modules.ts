import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users.service';
import { User, UserSchema } from './user.schema';
import { UserController } from './user.controller';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { Role, RoleSchema } from './role.schema';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{name:Role.name, schema:RoleSchema}])],
   controllers:[UserController,RoleController],
    providers: [UserService,RoleService],
  })
  export class UseModule {}