import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const partners = await prisma.governmentNGO.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(partners)
  } catch (error) {
    console.error('Error fetching government/NGO partners:', error)
    return NextResponse.json({ message: 'Error fetching government/NGO partners' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, organization, role, partnershipInterest, projectIdeas, additionalInfo } = await request.json()

    const partner = await prisma.governmentNGO.create({
      data: {
        userId,
        organization,
        role,
        partnershipInterest,
        projectIdeas,
        additionalInfo,
      },
    })

    return NextResponse.json({ message: 'Government/NGO partner profile created successfully', partner })
  } catch (error) {
    console.error('Error creating government/NGO partner profile:', error)
    return NextResponse.json({ message: 'Error creating government/NGO partner profile' }, { status: 500 })
  }
}