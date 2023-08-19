import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = (req: NextApiRequest, res: NextApiResponse) => {

        const prisma = new PrismaClient()
        prisma.staff.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                image: req.body.image,
                password: req.body.password,
                skills: req.body.skills,
                availability: "AVAILABLE",
                role: req.body.role,
                departmentId: req.body.departmentId,
            }
        })
        .then(data => {
            res.status(200).json(data)
            console.log('Staff created')
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