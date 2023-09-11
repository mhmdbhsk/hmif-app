import { Card, CardHeader } from "@/components";
import { AgendaCalendar } from "@/components/agenda-calendar";

export default function Agenda() {
  return (
    <div className="desktop-container flex flex-col items-center py-4">
      <h1 className="py-5 text-3xl font-bold md:text-4xl">Agenda</h1>

      <div className="">
        <AgendaCalendar />
      </div>
    </div>
  );
}
