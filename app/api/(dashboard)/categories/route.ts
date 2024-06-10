import connect from "@/lib/db";
import User from "@/lib/modals/users";
import Category from "@/lib/modals/category";
import mongoose, { Types } from "mongoose";
import { NextResponse } from "next/server";
import { request } from "http";
import { use } from "react";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        { status: 400 }
      );
    }
    await connect();

    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        { status: 400 }
      );
    }

    const category = await Category.find({ user: new Types.ObjectId(userId) });

    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching category" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
  } catch (error: any) {
    return new NextResponse("Error in creating category" + error.message, {
      status: 500,
    });
  }
};
