const DashboardCalendar = () => {
  const currentMonth = "April 2024";
  const calendarEvents = [
    { date: "2024-04-15", event: "Meeting with clients" },
    { date: "2024-04-22", event: "Project deadline" },
    { date: "2024-04-30", event: "Team outing" },
  ];

  const renderDaysOfMonth = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      const hasEvent = calendarEvents.some(
        (event) => parseInt(event.date.slice(-2)) === i
      );
      days.push(
        <div
          key={i}
          className={`p-2 border ${
            hasEvent ? "bg-blue-100" : ""
          } rounded-md text-center`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Dashboard Calendar</h3>
      <p className="text-sm text-gray-700 mb-2">{currentMonth}</p>

      <div className="flex justify-between">
        <div className="w-2/3">
          <div className="grid grid-cols-7 gap-2">{renderDaysOfMonth()}</div>
        </div>
        <div className="w-1/3 pl-4">
          <div className="space-y-2">
            {calendarEvents.map((event, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{event.date}:</span>{" "}
                  {event.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;
