const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
    { firstName  : 'Mimi',lastName :'john' ,username : 'bobby',email: 'mimi@g.mail', password ,phone :'0963844809'},
    { firstName  : 'candy',lastName :'y' ,username  : 'andy', email: 'candy@g.mail',password , phone :'0965432100'},
]

const addressData = [
 {address : '39/2', city : 'Kalasin', postal_code :'46170', province :'kalasin', district : 'Huai Mek', sub_district : 'Huai Mek', user_id: 1 },
 {address : '38/1', city : 'Khon Kaen', postal_code :'23451', province :'Khon Kaen', district : ' Mek', sub_district : 'Mek', user_id: 2 },
]
const run = async () => {
    // await prisma.user.deleteMany({})
    // await prisma.user.createMany({
    //     data : userData
    // })
    // await prisma.address.deleteMany({})
    await prisma.address.createMany({
        data : addressData
    })

}

run()