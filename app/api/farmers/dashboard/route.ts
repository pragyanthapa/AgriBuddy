import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'FARMER') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const farmer = await prisma.farmer.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        contracts: {
          take: 5,
          orderBy: { createdAt: 'desc' },
          include: {
            buyer: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!farmer) {
      return NextResponse.json({ message: 'Farmer not found' }, { status: 404 })
    }

    // Get market insights (mock data for demonstration)
    const marketInsights = [
      { crop: 'Wheat', price: 220, trend: 'up' },
      { crop: 'Corn', price: 180, trend: 'down' },
      { crop: 'Soybeans', price: 420, trend: 'stable' },
    ]

    return NextResponse.json({
      farmer,
      recentContracts: farmer.contracts,
      marketInsights,
    })
  } catch (error) {
    console.error('Error fetching farmer dashboard data:', error)
    return NextResponse.json({ message: 'Error fetching dashboard data' }, { status: 500 })
  }
}