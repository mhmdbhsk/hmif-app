import {
  Card,
  CardHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components";

export default function Organization() {
  return (
    <div className="desktop-container flex flex-col items-center py-4">
      <h1 className="py-5 text-3xl font-bold md:text-4xl">Organisasi</h1>

      <div className="relative mb-12 mt-6 grid w-full grid-cols-3 gap-3">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
