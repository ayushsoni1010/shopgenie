export const prerender = true
import { prisma } from "$lib/prisma.js"

export async function load() {
    try {
        await prisma.$connect()
        let grub = await prisma.product.findMany()
        console.log(grub)
        await prisma.$disconnect()
        return { res: grub }
    } catch (e) {
        await prisma.$disconnect()
        return { error: e }
    }

}