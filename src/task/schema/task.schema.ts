import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { privateEncrypt } from 'crypto';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Task {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  date_of_birth: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.path('email').validate(async function (value: string) {
  if (this.isNew) {
    const count = await this.model('Task').count({ email: value });
    return !count;
  } else {
    return true;
  }
}, 'Email Adress Already Exists');
