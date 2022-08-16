import { User, UserDocument } from './user.schema';
import { Role, RoleDocument } from './role.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateuserDto } from './user.controller';



@Injectable()
export class UserService {
constructor(
    @InjectModel(User.name) private readonly userModel:Model <UserDocument>,
    @InjectModel(Role.name) private readonly roleModel: Model<RoleDocument>,
    
  ) {}

  async createuser(createuserDto:CreateuserDto): Promise<User> {
    const createdCat = await this.userModel.create(createuserDto);
    return createdCat;
  }


async findOne(id: string) {
    return await this.userModel.findOne({ _id: id }).populate('role', '', this.roleModel).exec();
}

}
