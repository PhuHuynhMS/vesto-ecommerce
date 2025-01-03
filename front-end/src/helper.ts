import * as yup from 'yup';

export function getSubmitFn<Schema extends yup.ObjectSchema<Record<string, unknown>>>(
  _: Schema,
  callback: (values: yup.InferType<Schema>) => void,
) {
  return (values: Record<string, unknown>) => {
    return callback(values);
  };
}
