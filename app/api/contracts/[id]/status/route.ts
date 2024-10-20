import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const { id } = params

    const updatedContract = await prisma.contract.update({
      where: { id },
      data: { status },
    })

    return NextResponse.json({ message: 'Contract status updated successfully', contract: updatedContract })
  } catch (error) {
    console.error('Error updating contract status:', error)
    return NextResponse.json({ message: 'Error updating contract status' }, { status: 500 })
  }
}