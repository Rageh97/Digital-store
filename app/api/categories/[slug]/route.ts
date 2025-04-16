import { NextResponse } from 'next/server';
import { CategoryApiResponse, UpdateCategoryInput } from '@/types/category';
import prisma from '@/lib/prisma';  // Correct import path


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const category = await prisma.category.findUnique({
      where: { slug: params.slug },
    });

    if (!category) {
      return NextResponse.json<CategoryApiResponse>({
        success: false,
        error: 'Category not found',
      }, { status: 404 });
    }

    return NextResponse.json<CategoryApiResponse>({
      success: true,
      data: category,
    });
  } catch (error) {
    return NextResponse.json<CategoryApiResponse>({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const body: UpdateCategoryInput = await request.json();
    
    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { slug: params.slug },
    });

    if (!existingCategory) {
      return NextResponse.json<CategoryApiResponse>({
        success: false,
        error: 'Category not found',
      }, { status: 404 });
    }

    // Check if new slug is already taken
    if (body.slug && body.slug !== params.slug) {
      const slugExists = await prisma.category.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json<CategoryApiResponse>({
          success: false,
          error: 'New slug already exists',
        }, { status: 400 });
      }
    }

    const updatedCategory = await prisma.category.update({
      where: { slug: params.slug },
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description === null ? null : body.description,
        image: body.image === null ? null : body.image,
        isActive: body.isActive,
      },
    });

    return NextResponse.json<CategoryApiResponse>({
      success: true,
      data: updatedCategory,
      message: 'Category updated successfully',
    });
  } catch (error) {
    return NextResponse.json<CategoryApiResponse>({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { slug: params.slug },
    });

    if (!existingCategory) {
      return NextResponse.json<CategoryApiResponse>({
        success: false,
        error: 'Category not found',
      }, { status: 404 });
    }

    // TODO: Add check if category has products before deleting

    await prisma.category.delete({
      where: { slug: params.slug },
    });

    return NextResponse.json<CategoryApiResponse>({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    return NextResponse.json<CategoryApiResponse>({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}