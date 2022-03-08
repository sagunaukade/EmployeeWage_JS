//UC-5 Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS
    ) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days " + totalWorkingDays + " Total Hrs:" + totalEmpHrs + " EmpWage: " + empWage);
  }