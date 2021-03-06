/* eslint-disable prettier/prettier */
import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@ArgsType()
export class FindUniqueDonationArgs {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;
}
