import { Request, Response } from 'express';
import { handleError } from '../errors/handle.error';
import BeautypackageModel from '../models/beautyPackage.model';
import mongoose from 'mongoose';

export default class BeautyPackageController {
  constructor() {}

  public async getAllBeautyPackages(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const beautyPackages = await BeautypackageModel.find({});

        res.status(200).json(beautyPackages);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async getABeautyPackage(req: Request, res: Response): Promise<void> {
    try {
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty package not found' });
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautypackageModel.findById(bid);

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async createABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { title, description, category, images, price } = req.body;

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautypackageModel.create({
          title,
          description,
          category,
          images,
          price,
        });

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async updateABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { title, description, category, images, price } = req.body;
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty package not found' });
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautypackageModel.findByIdAndUpdate(
          bid,
          {
            title,
            description,
            category,
            images,
            price,
          },
          { new: true }
        );

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async deleteABeautyPackage(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty package not found' });
      }

      await Promise.resolve().then(async () => {
        const beautyPackage = await BeautypackageModel.findByIdAndDelete(bid);

        res.status(200).json(beautyPackage);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
