const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database mydata')
  await prisma.$executeRawUnsafe('CREATE Database mydata')
}
console.log('Reset DB')
run()