import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryModel } from './category.model';
import { CreateCategoryDto } from './Dto/Create-Category.dto';

@Controller('categorie')
export class CategoryController {
  constructor(private categorieService: CategoryService) {}

  @Get()
  getAllCategories(): CategoryModel[] {
    return this.categorieService.getAllCategories();
  }
  @Get('/:id')
  getCategoryById(@Param('id') id: string): CategoryModel {
    return this.categorieService.getCategoryById(id);
  }
  @Post()
  createCategorie(@Body() CreateCategoryDto: CreateCategoryDto): CategoryModel {
    return this.categorieService.createCategorie(CreateCategoryDto);
  }
}
