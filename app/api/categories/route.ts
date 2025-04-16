import { NextResponse } from 'next/server';

import { CategoryApiResponse, CreateCategoryInput } from '@/types/category';
import prisma from '@/lib/prisma'; 


export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json<CategoryApiResponse>({
      success: true,
      data: categories,
    });
  } catch (error) {
    return NextResponse.json<CategoryApiResponse>({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// ....................
export async function POST(request: Request) {
    try {
      const body: CreateCategoryInput = await request.json();
      
      // Validate required fields
      if (!body.name || !body.slug) {
        return NextResponse.json<CategoryApiResponse>({
          success: false,
          error: 'Name and slug are required',
        }, { status: 400 });
      }
  
      // Check if slug already exists
      const existingCategory = await prisma.category.findUnique({
        where: { slug: body.slug },
      });
  
      if (existingCategory) {
        return NextResponse.json<CategoryApiResponse>({
          success: false,
          error: 'Slug already exists',
        }, { status: 400 });
      }
  
      const category = await prisma.category.create({
        data: {
          name: body.name,
          slug: body.slug,
          description: body.description,
          image: body.image,
          isActive: body.isActive ?? true,
        },
      });
  
      return NextResponse.json<CategoryApiResponse>({
        success: true,
        data: category,
        message: 'Category created successfully',
      }, { status: 201 });
    } catch (error) {
      return NextResponse.json<CategoryApiResponse>({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }, { status: 500 });
    }
  }