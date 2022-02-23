import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CategorieRepository } from 'src/product/categorie-repository';
import { CategoryModel } from './category.model';
import { v4 as uuid } from 'uuid';
import { CreateCategoryDto } from './Dto/Create-Category.dto';

@Injectable()
export class CategoryService {
  private category: CategoryModel[] = [];
  //   constructor(
  //     @InjectRepository(CategorieRepository)
  //     private categorieRepository: CategorieRepository,
  //   );
  getAllCategories(): CategoryModel[] {
    return this.category;
  }
  createCategorie(CreateCategoryDto: CreateCategoryDto): CategoryModel {
    const { category_name } = CreateCategoryDto;
    const category: CategoryModel = {
      id: uuid(),
      category_name,
    };
    this.category.push(category);
    return category;
  }

  getCategoryById(id: string): CategoryModel{
    const cate= this.category.find((cat)=> cat.id=== id );
    if (!cate){
        throw new InternalServerErrorException();
    }
    return cate;
  }

}
