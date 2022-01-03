// get instance do repositorio

import { SpecificationsRepository } from "../../repositories/Implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repositoryInstance = SpecificationsRepository.getInstance();
const createSpecificationuseCase = new CreateSpecificationUseCase(
  repositoryInstance
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationuseCase
);

export { createSpecificationController };
