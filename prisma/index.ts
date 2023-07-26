import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS{
        interface Global{}
    }
}

interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development" ) {
    global.prisma = prisma
}

export default prisma