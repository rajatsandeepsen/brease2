import { PrismaClient } from '@prisma/client'
// import { NextApiRequest, NextApiResponse } from 'next'

 
const handler = () => {// (req: NextApiRequest, res: NextApiResponse) => {
  
  const prisma = new PrismaClient()
  prisma.project.create({
    data: {
      name: 'Prisma Client',
        description: 'Prisma Client for Node.js',
        deadline: '2021-10-10T00:00:00.000Z',


    }
  })
//   res.end()
}
 
export default handler  

handler()