"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type FormData = {
  name: string;
  img: string;
  author: string;
  salary: string;
  location: string;
  description: string;
  employmentType: string;
};

export async function createJob(data: FormData) {
  await prisma.jobPosting.create({
    data: {
      name: data.name,
      img: data.img,
      location: data.location,
      salary: parseFloat(data.salary),
      description: data.description,
      employmentType: data.employmentType,
      author: data.author,
    },
  });

  revalidatePath("/create");
}
