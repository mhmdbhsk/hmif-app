import { Card, CardContent, CardHeader } from "@/components";
import { appNavigationConfig } from "@/configs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="desktop-container flex flex-col items-center justify-center">
        <span className="flex flex-nowrap text-5xl font-medium md:text-8xl">
          Himpunan Mahasiswa Informatika Universitas Diponegoro
        </span>

        <div className="flex w-full space-x-2 py-12">
          {appNavigationConfig.map((item) => (
            <Link
              href={item.path}
              key={item.title}
              className="hover: w-full hover:translate-x-1 hover:translate-y-1"
            >
              <Card className="flex flex-1 shadow-none">
                <CardHeader>{item.title}</CardHeader>
                <CardContent></CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
