import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    let { id } = req.query;


        const prisma = new PrismaClient()
        prisma.department.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            }
        })
        .then(data => {
            res.status(200).json(data)
            console.log('Department created')
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