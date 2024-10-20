import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    // Check user session
    const session = await getServerSession(authOptions)

    // Check if the user is authenticated and has the correct role (BUYER)
    if (!session || session.user.role !== 'BUYER') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Fetch buyer details using the session's user ID
    const buyer = await prisma.buyer.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        contracts: {
          take: 5, // Fetch only the last 5 contracts
          orderBy: { createdAt: 'desc' }, // Order contracts by latest
          include: {
            farmer: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
                farmName: true,
              },
            },
          },
        },
      },
    })

    // If the buyer does not exist, return a 404 error
    if (!buyer) {
      return NextResponse.json({ message: 'Buyer not found' }, { status: 404 })
    }

    // Fetch available farmers (pagination, max 5 farmers)
    const availableFarmers = await prisma.farmer.findMany({
      take: 5, // Adjust the number of farmers you want to fetch
      select: {
        id: true,
        farmName: true,
        location: true,
        cropTypes: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    })

    // Send the fetched data as a response
    return NextResponse.json({
      buyer,
      recentContracts: buyer.contracts,
      availableFarmers,
    })
  } catch (error) {
    // Log detailed error in production logs
    console.error('Error fetching buyer dashboard data:', error)

    // Return generic error message for client-side
    return NextResponse.json(
      { message: 'Error fetching dashboard data', error: error.message },
      { status: 500 }
    )
  }
}
