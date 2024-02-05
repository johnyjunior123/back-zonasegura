import { Router } from "express";
import { CreateOccurrenceDto } from "../dto/ocurrence.dto";
import { validate } from "class-validator";
import { OccurrenceService } from "../services/occurrence.service";
import { verifyTokenMiddleware } from "../middleware/verifyToken";
export const ocurrenceRouter = Router();
const occurrenceService = new OccurrenceService();

ocurrenceRouter.post("/ocurrence", verifyTokenMiddleware, async (req, res) => {
  const newOccurrence = new CreateOccurrenceDto(req.body);
  const errors = await validate(newOccurrence);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  const occurrence = await occurrenceService.create(newOccurrence);
  if (occurrence instanceof Error) {
    res.status(400).json({ message: "ocorrência já existente" });
  }
  res.status(200).json({ ...occurrence, user: undefined });
});

ocurrenceRouter.get(
  "/occurrence/:id",
  verifyTokenMiddleware,
  async (req, res) => {
    try {
      const occurrence = await occurrenceService.findById(
        req.params.id,
        req.body.user.id
      );
      res.status(200).json(occurrence);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
);

ocurrenceRouter.get("/occurrences", verifyTokenMiddleware, async (req, res) => {
  try {
    const occurrences = await occurrenceService.findAll(req.body.user.id);
    res.status(200).json(occurrences);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});
