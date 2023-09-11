/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { eventsConfig } from "@/configs";

const localizer = momentLocalizer(moment);

export const AgendaCalendar = () => {
  return (
    <div className="myCustomHeight">
      <div className="h-[800px] w-full py-6">
        <Calendar
          events={eventsConfig}
          localizer={localizer}
          showMultiDayTimes
          step={60}
        />
      </div>
    </div>
  );
};
