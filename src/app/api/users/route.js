import { NextResponse } from "next/server";

async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return NextResponse.json(data);
}

async function POST(request) {
  const { name, surname } = await request.json();
  console.log(name, surname);
  return NextResponse.json({
    message: "POST"
  });
}

function PUT() {
  return NextResponse.json({
    message: "PUT"
  });
}

function DELETE() {
  return NextResponse.json({
    message: "DELETE"
  });
}

export { GET, DELETE, POST, PUT };