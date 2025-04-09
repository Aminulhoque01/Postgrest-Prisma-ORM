import { PrismaClient } from "@prisma/client";
import app from "./app";


const prisma = new PrismaClient();


const PORT = process.env.PORT || 3003;

async function main() {
 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

    // const postUser = await prisma.user.create({
    //     data:{
    //         email:"aminul1@haque.com",
    //         name:"Aminul Haque",
    //         password:"aminul123",
    //         age:25,
             
    //     }
    // });
    // console.log(postUser);
}

main()
   