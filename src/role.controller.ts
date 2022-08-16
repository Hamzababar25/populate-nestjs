import { Body, Controller, Post } from "@nestjs/common";
import { Role } from "./role.schema";
import { RoleService } from "./role.service";

export class CreateroleDto {
    name: string;
    permissions: string;
   role: Role;
   
  
  }


  @Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}
     @Post()
async create(@Body() createroleDto: CreateroleDto) {
   return this.roleService.createrole(createroleDto)

}
}
