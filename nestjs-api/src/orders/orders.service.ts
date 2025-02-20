import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderStatus } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private OrderSchema: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    if (createOrderDto.status != null)
      throw new BadRequestException(`Unable to report status. Remove.`);
    return this.OrderSchema.create({
      ...createOrderDto,
      status: OrderStatus.PENDING,
    });
  }

  findAll() {
    return this.OrderSchema.find().populate('asset');
  }
}
