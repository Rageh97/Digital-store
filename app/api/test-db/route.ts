
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    await prisma.$connect()
    return NextResponse.json({ message: '✅ Connected to database successfully!' })
  } catch (error) {
    console.error('❌ DB Connection Error:', error)
    return NextResponse.json({ error: '❌ Failed to connect to database' }, { status: 500 })
  }
}
