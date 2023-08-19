import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {

        const prisma = new PrismaClient()
        
        prisma.task.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                projectId: req.body.projectId,
                deadline: req.body.deadline,
                expectedTime: req.body.deadline,
            }
        })
        .then(data => {
            res.status(200).json(data)
            console.log('Task created')
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