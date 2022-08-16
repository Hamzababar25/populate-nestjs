import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type RoleDocument = Role & mongoose.Document;

@Schema()
export class Role {
  @Prop({ type: String, required: true, unique: true, index: true })
  name: string;

  @Prop({ type: [String], required: true })
  permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);