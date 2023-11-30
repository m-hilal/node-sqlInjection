"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.CONST_VALIDATION_TITLE = 'sqlInjection';
Constants.CONST_DEFAULT_RESTRICTED_CHARACTERS_IN_PAYLOAD = '/[<>?*()]/i';
Constants.CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD = "/(UNION)|(SELECT)|(INSERT)|(DROP)|(CREATE)|(Truncate)|(DELETE)|(ALTER)|(%0A)|(%0D)|(%00)|(1=1)|('( )*'=)|(1--)|('1'='1)|(admin( )*--)|(%21)|(1( )*'( )*--)/i";
Constants.CONST_RESTRICTED_CHARACTERS_KEY = 'restrictedCharactersExp';
Constants.CONST_RESTRICTED_WORDS_KEY = 'restrictedWordsExp';
Constants.CONST_ERROR_BAD_REQUEST = "The request contains invalid or forbidden characters. Please recheck and try again!";
