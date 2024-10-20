import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const techProviders = await prisma.technologyProvider.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(techProviders)
  } catch (error) {
    console.error('Error fetching technology providers:', error)
    return NextResponse.json({ message: 'Error fetching technology providers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, companyName, expertise, technologyOffering, integrationIdeas, additionalInfo } = await request.json()

    const techProvider = await prisma.technologyProvider.create({
      data: {
        userId,
        companyName,
        expertise,
        technologyOffering,
        integrationIdeas,
        additionalInfo,
      },
    })

    return NextResponse.json({ message: 'Technology provider profile created successfully', techProvider })
  } catch (error) {
    console.error('Error creating technology provider profile:', error)
    return NextResponse.json({ message: 'Error creating technology provider profile' }, { status: 500 })
  }
}