import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Role } from "./role.schema";
import { User } from "./user.schema";
import { UserService } from "./users.service";

export class CreateuserDto {
    name: string;
    email: number;
   role: Role;
   
  
  }

  @Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
     @Post()
async create(@Body() createuserDto: CreateuserDto) {
   return this.userService.createuser(createuserDto)

}

@Get(':id')
async findOne(@Param('id') id: string): Promise<User> {
  return this.userService.findOne(id);
}

@Get() getHello(): string {
    return "no";
  }
         

}
