import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const farmers = await prisma.farmer.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(farmers)
  } catch (error) {
    console.error('Error fetching farmers:', error)
    return NextResponse.json({ message: 'Error fetching farmers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, farmName, location, cropTypes, farmSize, experience } = await request.json()

    const farmer = await prisma.farmer.create({
      data: {
        userId,
        farmName,
        location,
        cropTypes,
        farmSize,
        experience,
      },
    })

    return NextResponse.json({ message: 'Farmer profile created successfully', farmer })
  } catch (error) {
    console.error('Error creating farmer profile:', error)
    return NextResponse.json({ message: 'Error creating farmer profile' }, { status: 500 })
  }
}