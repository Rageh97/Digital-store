import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Everything about building modern websites and web applications',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Visual communication and problem-solving through design',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Promoting brands through digital channels',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'Content Writing',
    slug: 'content-writing',
    description: 'Creating engaging written content for digital platforms',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'SEO Services',
    slug: 'seo-services',
    description: 'Improving website visibility in search engines',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'Video Production',
    slug: 'video-production',
    description: 'Professional video creation and editing services',
    image: '/public/YOUTUBE.jpeg',
    isActive: true
  },
  {
    name: 'Photography',
    slug: 'photography',
    description: 'Professional photography services',
    image: '/public/YOUTUBE.jpeg',
    isActive: false  // Example of inactive category
  }
];

async function main() {
  console.log('Start seeding...');
  
  for (const category of categories) {
    await prisma.category.create({
      data: category
    });
    console.log(`Created category: ${category.name}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });