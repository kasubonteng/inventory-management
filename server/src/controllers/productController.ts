import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
	try {
		const search = req.query.search ? String(req.query.search) : "";
		const products = await prisma.products.findMany({
			where: {
				name: {
					contains: search,
				},
			},
		});

		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error retrieving products" });
	}
};

export const createProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, price, stockQuantity, productId, rating } = req.body;
		const product = await prisma.products.create({
			data: {
				productId,
				name,
				price,
				stockQuantity,
				rating,
			},
		});
		res.status(201).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error creating product" });
	}
};
