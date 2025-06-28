import { IsString, IsNotEmpty, IsDecimal, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @Transform(({ value }) => new Decimal(value))
  @IsDecimal()
  price: Decimal;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @Transform(({ value }) => value ? new Decimal(value) : undefined)
  @IsDecimal()
  @IsOptional()
  price?: Decimal;
}