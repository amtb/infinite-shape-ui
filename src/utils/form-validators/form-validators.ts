import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  /**
   * Validates if the form control's value is even
   */
  static readonly even: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = Number(control.value);
    if (!isNaN(value) && value % 2 !== 0) {
      return { even: {valid: false} };
    }

    return null;
  }
}
