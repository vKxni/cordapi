/* eslint-disable prettier/prettier */
import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    createdAt = "createdAt",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
