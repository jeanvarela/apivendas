import { Router } from 'express';
import { resourceLimits } from 'worker_threads';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' });
});

export default router;
