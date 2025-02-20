import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AssetDocument } from 'src/assets/entities/asset.entity';
import * as crypto from 'crypto';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop({ type: String, ref: 'Asset' })
  asset: AssetDocument | string;

  @Prop()
  price: number;

  @Prop()
  status: OrderStatus;

  createdAt!: Date;

  updatedAt!: Date;
}

export enum OrderStatus {
  OPEN = 'O',
  PENDING = 'P',
  CLOSED = 'C',
}

export const OrderSchema = SchemaFactory.createForClass(Order);
