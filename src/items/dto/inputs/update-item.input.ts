import { IsUUID } from 'class-validator';
import { CreateItemInput } from './index';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  
  
  @Field(() => ID)
  @IsUUID()
  id:string;
}
