import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateroleDto } from "./role.controller";
import { Role,RoleDocument } from "./role.schema";

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private readonly catModel: Model<RoleDocument>) {}

  async createrole(createroleDto:CreateroleDto): Promise<Role> {
    const createdrole = await this.catModel.create(createroleDto);
    return createdrole;
  }
}