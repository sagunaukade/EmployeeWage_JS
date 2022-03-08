//Calculating Wages for a Month
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
      let empCheck = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Number of Days " + NUM_OF_WORKING_DAYS + " Total Hrs:" + totalEmpHrs + " Emp Wage:" +   empWage );
  }