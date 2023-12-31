// оболочка TextField, которая позволяет использовать react-hook-form для неподдерживаемых компанент(без ref)
import {
  Control,
  FieldPath,
  // FieldValue,
  FieldValues,
  useController,
  // UseControllerProps,
} from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<TextFieldProps, 'onChange' | 'value' | 'id'>

// type ControlledTextFieldProps<TFieldValues extends FieldValues> = Omit<
//   UseControllerProps<TFieldValues>,
//   'rules' | 'defaultValue'
// > &
//   Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return <TextField {...props} {...field} errorMessage={error?.message} id={props.name} />
}
