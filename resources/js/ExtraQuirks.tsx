export function getAllSundays(startDate: Date, endDate: Date) {
    let sundays = [];
    let currentDate = new Date(startDate);
    
    // Loop through all days from startDate to endDate
    while (currentDate <= endDate) {
        // If current day is Sunday (weekday 0)
        if (currentDate.getDay() === 0) {
            sundays.push(new Date(currentDate).getDate()); // Add to list
        }
        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return sundays;
}