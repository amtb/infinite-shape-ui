import { FormControl } from '@angular/forms';
import { CustomValidators } from './form-validators';

describe('Form validators', () => {

  describe('even validator', () => {
    const evenValidator = CustomValidators.even;
    const control = new FormControl();

    it('should not be even', () => {
      control.setValue(1);
      expect(evenValidator(control)).toEqual({even: {valid: false}});

      control.setValue('3');
      expect(evenValidator(control)).toBe({even: {valid: false}});
    });

    it('should be even', () => {
      control.setValue(2);
      expect(evenValidator(control)).toBeNull();

      control.setValue('4');
      expect(evenValidator(control)).toBeNull();
    });

    it('should not validate', () => {
      control.setValue('string');
      expect(evenValidator(control)).toBeNull();
    });
  });

});
