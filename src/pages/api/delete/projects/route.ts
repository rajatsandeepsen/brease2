import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {

        const id = req.body.id
        
        const prisma = new PrismaClient()
        
        prisma.project.delete({
            where: { id: id},
        })
        .then(() => {
            res.status(200).json({message: 'Task Deleted'})
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