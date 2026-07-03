import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "../lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create categories and map them to their database IDs
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  const categoryMap: Record<string, string> = {};

  for (const catName of categories) {
    const category = await prisma.category.upsert({
      where: { name: catName },
      update: {},
      create: { name: catName },
    });
    categoryMap[catName] = category.id;
    console.log(`Category verified/created: ${catName} (${category.id})`);
  }

  // 2. Insert products
  for (const p of PRODUCTS) {
    const productData = {
      sku: p.sku,
      name: p.name,
      price: p.price,
      priceExGst: p.priceExGst,
      inStock: p.inStock,
      reviews: p.reviews,
      shortDescription: p.shortDescription || null,
      features: p.features,
      specs: p.specs,
      images: p.images,
      manualUrl: p.manualUrl || null,
      isFlagship: p.isFlagship || false,
      compatibility: p.compatibility || [],
      categoryId: categoryMap[p.category] || null,
    };

    await prisma.product.upsert({
      where: { id: p.id },
      update: productData,
      create: {
        id: p.id,
        ...productData,
      },
    });
    console.log(`Product verified/created: ${p.name} (${p.id})`);
  }

  console.log("Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
