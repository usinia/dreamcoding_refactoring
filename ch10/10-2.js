function disabilityAmount(employee) {
  return isNotEligibleForDisablility() ? 0 : 1;
}

function isNotEligibleForDisablility(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
