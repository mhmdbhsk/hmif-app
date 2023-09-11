import { Card, CardHeader } from "@/components";

export default function Article() {
  return (
    <div className="desktop-container flex flex-col items-center py-4">
      <h1 className="py-5 text-3xl font-bold md:text-4xl">Artikel</h1>

      <div className="relative mb-12 mt-6 flex w-full flex-col gap-3">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-70 text-sm font-bold text-white">
          Coming Soon
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card key={item} className="shadow-none">
            <CardHeader className="flex w-full flex-1 flex-row items-center justify-between font-medium">
              <span>Article {item}</span>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
