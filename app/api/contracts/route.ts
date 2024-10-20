import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const contracts = await prisma.contract.findMany({
      include: {
        farmer: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
        buyer: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })
    return NextResponse.json(contracts)
  } catch (error) {
    console.error('Error fetching contracts:', error)
    return NextResponse.json({ message: 'Error fetching contracts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { farmerId, buyerId, cropType, quantity, price, startDate, endDate } = await request.json()

    const contract = await prisma.contract.create({
      data: {
        farmerId,
        buyerId,
        cropType,
        quantity,
        price,
        startDate,
        endDate,
        status: 'PENDING',
      },
    })

    return NextResponse.json({ message: 'Contract created successfully', contract })
  } catch (error) {
    console.error('Error creating contract:', error)
    return NextResponse.json({ message: 'Error creating contract' }, { status: 500 })
  }
}