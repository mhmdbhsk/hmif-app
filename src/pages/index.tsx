import { Card, CardContent, CardHeader, Ribbon } from "@/components";

export default function Home() {
  return (
    <div>
      <div className="desktop-container flex flex-col items-center justify-center">
        <span className="flex flex-nowrap text-5xl font-medium md:text-8xl">
          Himpunan Mahasiswa Informatika Universitas Diponegoro
        </span>

        <div className="flex w-full space-x-2 py-12">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="flex flex-1 shadow-none">
              <CardHeader>DMW++</CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
