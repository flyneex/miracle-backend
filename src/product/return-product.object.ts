import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnReviewObject } from 'src/review/return-category.object'

export const returnProductObject: Prisma.ProductSelect = {
	images: true,
	name: true,
	description: true,
	price: true,
	createdAt: true,
	id: true,
	slug: true,
	category: { select: returnCategoryObject },
	reviews: { select: returnReviewObject }
}

export const returnProductObjectFullest: Prisma.ProductSelect = {
	...returnProductObject
}
