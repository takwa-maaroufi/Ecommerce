import { isNull } from "@angular/compiler/src/output/output_ast";
import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

  // whitespace validation
  static notOnlyWhiteSpaces(control: FormControl): ValidationErrors {
      // check if string only contains spaces
      if(control.value != null && control.value.trim().length === 0){
          // invalid, return error object
          return {'notOnlyWhiteSpaces': true};
      }
      // valid, return null
      return isNull;
  }
}
