import React, { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import dayjs, { Dayjs } from "dayjs";

const customStyles = {
  "& .MuiPickersCalendarHeader-switchViewButton": {
    display: "none !important",
    opacity: 0,
    pointerEvents: "none",
  },
  "& .MuiPickersDay-root": {
    color: "#ffffff",
    fontWeight: 500,
    borderRadius: "50px",
  },
  "& .Mui-selected": {
    backgroundColor: "#FFFFFF !important",
    color: "#000000 !important",
  },
  "& .MuiPickersDay-today": {
    border: "1px solid #ffffff99",
  },
  "& .MuiPickersDay-root:hover": {
    backgroundColor: "#ffffff22 !important",
  },
  "& .Mui-disabled": {
    color: "#ffffff99 !important",
    textDecoration: "line-through",
  },
  "& .MuiPickersCalendarHeader-root": {
    color: "#F9FAFB",
    borderBottom: "0.7px solid #ffffff77 !important",
  },
  "& .MuiPickersCalendarHeader-label": {
    color: "#fff",
  },
  "& .MuiPickersCalendarHeader-root .MuiPickersArrowSwitcher-button.Mui-disabled":
    {
      opacity: 0.5,
    },
  "& .MuiPickersCalendarHeader-labelContainer": {
    pointerEvents: "none",
  },
  "& .MuiPaper-root": {
    borderRadius: "8px",
  },
  "& .MuiDayCalendar-weekDayLabel": {
    color: "#FFFFFF !important",
    fontWeight: 600,
  },

  "& .MuiPickersArrowSwitcher-button": {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "22px",
    padding: "4px",
    width: "22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    transition: "background-color 0.3s, transform 0.2s",
  },
  "& .MuiPickersArrowSwitcher-button:hover": {
    backgroundColor: "#E5E7EB !important",
    transform: "scale(1.005)",
  },
  "& .MuiPickersArrowSwitcher-button svg": {
    color: "#000000 !important",
    fontSize: "16px",
  },
};

const TimeAndDate = () => {
  const generateTimeSlots = () => {
    const slots = [];
    let startTime = 9 * 60; // Convert 9:00 AM to minutes
    let endTime = 16 * 60 + 30; // 16:30 (4:30 PM)

    while (startTime <= endTime) {
      const hours = Math.floor(startTime / 60);
      const minutes = startTime % 60;
      const formattedTime = `${hours}:${minutes === 0 ? "00" : minutes}`;

      slots.push(formattedTime);
      startTime += 30; 
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const disablePastDates = (date: Dayjs) => date.isBefore(dayjs(), "day");

  return (
    <div className="flex gap-6 h-full">
      <div className="p-4 bg-[#3f3f3f] text-white inline-block">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={setSelectedDate}
            views={["day", "month"]}
            shouldDisableDate={disablePastDates}
            minDate={dayjs()}
            sx={customStyles}
            loading={false}
            renderLoading={() => <DayCalendarSkeleton />}
          />
        </LocalizationProvider>
      </div>
      <div className="grid grid-cols-2 h-full gap-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`px-6 py-1 rounded-[3px] text-[13px]  h-[30px] flex items-center justify-center border cursor-pointer border-[#ccc] font-medium transition-all duration-300 ease-in-out ${
              selectedTime === slot
                ? "bg-[#3f3f3f] text-white"
                : "hover:bg-[#ccc] hover:border-black hover:text-black"
            }`}
            onClick={() => setSelectedTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeAndDate;
