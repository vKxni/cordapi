/* eslint-disable prettier/prettier */
import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';

@ArgsType()
export class DeleteOneFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;
}
