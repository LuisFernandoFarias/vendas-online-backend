import { Module } from '@nestjs/common';
import { AddressController } from './adress.controller';
import { AddressService } from './adress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AdressModule {}
