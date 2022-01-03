import { SpecificationsRepository } from "../../repositories/Implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
