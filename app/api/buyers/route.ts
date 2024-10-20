import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const buyers = await prisma.buyer.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(buyers)
  } catch (error) {
    console.error('Error fetching buyers:', error)
    return NextResponse.json({ message: 'Error fetching buyers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId, companyName, industry, productsInterested, purchaseVolume, additionalInfo } = await request.json()

    const buyer = await prisma.buyer.create({
      data: {
        userId,
        companyName,
        industry,
        productsInterested,
        purchaseVolume,
        additionalInfo,
      },
    })

    return NextResponse.json({ message: 'Buyer profile created successfully', buyer })
  } catch (error) {
    console.error('Error creating buyer profile:', error)
    return NextResponse.json({ message: 'Error creating buyer profile' }, { status: 500 })
  }
}