"use client";
import { useEffect, useState } from "react";
import { getToDo } from "@/actions/supabase";
import { ScheduleIcon } from "./Assets";
import { data } from "@/lib/schedule/types";

export default function Schedule() {
  const [data, setData] = useState<unknown | Array<data> | any>();
  useEffect(() => {
    const fetchList = async () => {
      const getData = await getToDo();
      setData(getData);
    };
    fetchList();
  }, []);

  // Creating an array to represent each hour from 9 AM to 10 PM
  const hours = Array.from({ length: 14 }, (_, i) => {
    const hour = 9 + i;
    return hour === 9 ? `0${hour}:00` : `${hour}:00`;
  });

  // Mapping each hour to its tasks
  const schedule = hours.map((hour) => {
    return {
      displayHour: hour, // Display string with :00
      hour: hour, // The full hour string for filtering tasks
      title: data?.filter((item: { time: string }) =>
        item.time?.startsWith(hour)
      ),
    };
  });

  return (
    <>
      <div className="pl-6 flex items-center border-b-4 border-gray-500 border-double">
        <ScheduleIcon />
        <h1 className="text-2xl font-bold p-2">Schedule</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 px-6">
        {schedule.map((slot) => (
          <div
            key={slot.hour}
            className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <h3 className="font-semibold text-lg md:text-xl">
              {slot.displayHour}
            </h3>
            {slot.title?.length > 0 ? (
              <ul>
                {slot.title.map((task: { title: string }) => (
                  <li
                    key={task.title}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {task.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-green-500 dark:text-green-400">
                Free time
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
