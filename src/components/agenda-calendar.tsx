/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { eventsConfig } from "@/configs";
import { Children, cloneElement, useMemo } from "react";
import * as dates from "@/lib/dates";

const localizer = momentLocalizer(moment);

type ColoredDateCellWrapperProps = {
  children: React.ReactNode;
};

const ColoredDateCellWrapper = ({ children }: ColoredDateCellWrapperProps) =>
  cloneElement(Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

export const AgendaCalendar = () => {
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2015, 3, 1),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours"),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    [],
  );

  return (
    <div className="myCustomHeight">
      <div className="h-[800px] w-full py-6">
        <Calendar
          components={components}
          defaultDate={defaultDate}
          events={eventsConfig}
          localizer={localizer}
          max={max}
          showMultiDayTimes
          step={60}
          views={views}
        />
      </div>
    </div>
  );
};
