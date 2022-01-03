import { Router as router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
