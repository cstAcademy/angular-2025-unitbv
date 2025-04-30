import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormHelper {
  static invalidUrlCustomValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const isValid = /^https?:\/\//i.test(value);
      return isValid ? null : { invalidUrl: true };
    };
  }
}
