import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AssetDocument = HydratedDocument<Asset>;

@Schema()
export class Asset {
  @Prop()
  _id: string;

  @Prop()
  symbol: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
