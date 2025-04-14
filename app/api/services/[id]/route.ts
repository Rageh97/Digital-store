import { connectDB } from "@/lib/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const service = await Service.findById(params.id);
  return NextResponse.json(service);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await req.json();
  const updated = await Service.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  await Service.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
