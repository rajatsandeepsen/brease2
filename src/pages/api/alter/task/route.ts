import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
        const id = req.body.id
        delete req.body.id;

        const prisma = new PrismaClient()
        prisma.task.update({
            where: { id: id},
            data: req.body
        })
        .then(data => {
            res.status(200).json(data)
            console.log('Staff updated')
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