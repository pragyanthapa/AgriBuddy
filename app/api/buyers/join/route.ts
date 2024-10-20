import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, password, companyName, industry, productsInterested, purchaseVolume } = await request.json()

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Check if password is provided and is a string
    if (!password || typeof password !== 'string') {
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user and buyer profile
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'BUYER',
        buyer: {
          create: {
            companyName,
            industry,
            productsInterested,
            purchaseVolume,
          },
        },
      },
      include: {
        buyer: true,
      },
    })

    return NextResponse.json({ message: 'Buyer registered successfully', user: { id: user.id, name: user.name, email: user.email } })
  } catch (error) {
    console.error('Error registering buyer:', error)
    return NextResponse.json({ message: 'Error registering buyer', error: error.message }, { status: 500 })
  }
}