import * as yup from "yup";
export const inputSchema = yup.object().shape({
  name: yup.string("pls enter string type").required("name is required"),
  quantityPerUnit: yup
    .string("pls enter string type")
    .required("quantity is required"),
  unitPrice: yup
    .number("pls enter number type")
    .positive("pls enter positive number")
    .required("number is required"),
  unitsInStock: yup
    .number("pls enter number type")
    .positive("pls enter positive number")
    .required("unitsInStock is required"),
});
