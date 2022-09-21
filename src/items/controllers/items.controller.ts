import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from '../schema/item.schema';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }

  @Post()
  create(@Body() createItem: Item): string {
    return `Name: ${createItem.name} Description: ${createItem.description}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `find ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `delete ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItem: Item): string {
    return `update ${id} - Name: ${updateItem.name}`;
  }
}
