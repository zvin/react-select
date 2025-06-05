/** @jsx jsx */
import { FocusEventHandler, FunctionComponent } from 'react';
declare const RequiredInput: FunctionComponent<{
    readonly form?: string;
    readonly name?: string;
    readonly onFocus: FocusEventHandler<HTMLInputElement>;
}>;
export default RequiredInput;
