import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, password, farmName, location, cropTypes, farmSize, experience } = await request.json()

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user and farmer profile
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'FARMER',
        farmer: {
          create: {
            farmName,
            location,
            cropTypes,
            farmSize: parseFloat(farmSize),
            experience,
          },
        },
      },
      include: {
        farmer: true,
      },
    })

    return NextResponse.json({ message: 'Farmer registered successfully', user: { id: user.id, name: user.name, email: user.email } })
  } catch (error) {
    console.error('Error registering farmer:', error)
    return NextResponse.json({ message: 'Error registering farmer' }, { status: 500 })
  }
}