import { Request, response, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const repositories = this.listCategoryUseCase.execute();
    return res.status(201).json(repositories);
  }
}

export { ListCategoriesController };
