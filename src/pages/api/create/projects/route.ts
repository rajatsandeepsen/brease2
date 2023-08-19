import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
        const prisma = new PrismaClient()
        
        prisma.project.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                departmentId: req.body.departmentId,
                deadline: req.body.deadline,
                eta: req.body.deadline,
            }
        })
        .then(data => {
            res.status(200).json(data)
            console.log('Project created')
        })
        .catch(err => {
            res.status(500).json({message: err.message})
            console.error(err.message)
        })
        .finally(() => {
            prisma.$disconnect()
        })
        
}
 
export default handler  