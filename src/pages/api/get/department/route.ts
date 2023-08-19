import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient()

    try {
        const createdDepartment = await prisma.department.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            }
        })

        res.status(200).json(createdDepartment)
        console.log('Department created:', createdDepartment)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error })
        console.error('Error:', error)
    } finally {
        await prisma.$disconnect()
    }
}

export default handler