export function GET(req: Request, { params }: { params: { userId: string } }) {
  return Response.json({
    hello: "world",
    userId: params.userId,
  });
}
