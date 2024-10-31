const workingHoursMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const currentHour = currentDate.getHours();
  
    // Allow access only if it's Monday to Friday, 9 AM to 5 PM
    const isWorkingDay = currentDay >= 1 && currentDay <= 5;
    const isWorkingHour = currentHour >= 9 && currentHour < 17;
  
    if (isWorkingDay && isWorkingHour) {
      next(); // Proceed to the next middleware or route handler
    } else {
      res.send("Our website is only available Monday to Friday, from 9 AM to 5 PM.");
    }
  };

    module.exports = workingHoursMiddleware;