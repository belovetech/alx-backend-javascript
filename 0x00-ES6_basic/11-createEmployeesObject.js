export default function createEmployeesObject(departmentName, employees) {
  let object = {
    [departmentName]: [...employees],
  };

  return object;
}
