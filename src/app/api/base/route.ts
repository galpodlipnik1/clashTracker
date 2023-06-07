import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await request.json();
    const { name, description, image, townHall, type, baseUrl } = body;

    const newBase = await prisma.base.create({
      data: {
        name,
        description,
        image,
        townHall,
        type,
        baseUrl,
        userId: currentUser?.id ? currentUser.id : null,
      },
    });

    return NextResponse.json(newBase);
  } catch (error: any) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
