import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '../../generated/prisma/index.js';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        ...createBookDto,
        price: new Prisma.Decimal(createBookDto.price),
      },
    });
  }

  async findAll() {
    return this.prisma.book.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  async remove(id: string) {
    return this.prisma.book.delete({
      where: { id },
    });
  }
}