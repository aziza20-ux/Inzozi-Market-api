import { Response } from 'express';
import { AuthRequest } from '../../middleware/auth.js';
import prisma from '../config/prisma';

export const respondToApplication = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    if (!['ACCEPTED', 'DECLINED'].includes(response)) {
      res.status(400).json({ error: 'Invalid response value' });
      return;
    }

    const application = await prisma.application.findUnique({ where: { id: String(id) } });
    if (!application) {
      res.status(404).json({ error: 'Application not found' });
      return;
    }

    // Only the creator or the business owner can respond?
    // Wait, typically the creator responds to an offer from the business.
    if (req.role === 'CREATOR' && application.creatorId !== req.userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const updatedApplication = await prisma.application.update({
      where: { id: String(id) },
      data: { status: response },
    });

    res.status(200).json(updatedApplication);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};
