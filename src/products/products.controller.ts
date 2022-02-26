import { Controller, Get, Param, Post, Delete, Put, Body, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Controller('products')
export class ProductsController {
    @Get()
    @Redirect('https://google.com', 301)
    getAll() : string {
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id:string) {
        return 'getOne' + id
    }

    @Post()
    // @HttpCode(HttpStatus.HttpS
    // @Header('Cache-control', 'none')
    create(@Body() createProductDto: CreateProductDto): string {
        return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Remove  ${id}`
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update ' + id
    }


}
