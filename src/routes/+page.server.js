import { prisma } from '$lib/prisma.js'
export const prerender = false;
export const ssr = false;

export async function load() {
    try {
        await prisma.$connect()
        let grub = await prisma.product.findMany()
        console.log(grub)
        await prisma.$disconnect()
        return { grub: grub }
    } catch (e) {
        await prisma.$disconnect()
        console.log(e)
        return { grub: "e" }
    }

}