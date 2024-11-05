import data from '../db.json';

type Book = {
  title: string;
  author: string;
};

export async function GET() {
  return Response.json(data);
}

export async function POST(request: Request) {
  const book: Book = await request.json();
  data.books.push(book);

  return Response.json(book);
}
