import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );
  const { name, description } = request.body;

  try {
    createSpecificationService.execute({ name, description });
  } catch (err) {
    response.status(401).json({ message: err.message });
  }

  return response.status(201).json();
});

/* specificationsRoutes.get('/', (request, response) => {
  return response.status(201).json(categoriesRepository.list());
}); */

export { specificationsRoutes };
