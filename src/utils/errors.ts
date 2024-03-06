export function formatErrorsClassValidator(errors: any) {
  const objectErrors = errors.map((element) => {
    return { field: element.property, errors: element.constraints };
  });
  return objectErrors;
}
