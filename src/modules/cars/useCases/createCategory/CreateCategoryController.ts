import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createCategoryUseCase.execute({ name, description });
    } catch (err) {
      response.status(401).json({ message: err.message });
    }

    return response.status(201).json();
  }
}
