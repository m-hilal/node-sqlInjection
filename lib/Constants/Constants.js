"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
    static CONST_VALIDATION_TITLE = 'sqlInjection';
    static CONST_DEFAULT_RESTRICTED_CHARACTERS_IN_PAYLOAD = '/[<>?*()]/i';
    static CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD = "/(UNION)|(SELECT)|(INSERT)|(DROP)|(CREATE)|(Truncate)|(DELETE)|(ALTER)|(%0A)|(%0D)|(%00)|(1=1)|('( )*'=)|(1--)|('1'='1)|(admin( )*--)|(%21)|(1( )*'( )*--)/i";
    static CONST_RESTRICTED_CHARACTERS_KEY = 'restrictedCharactersExp';
    static CONST_RESTRICTED_WORDS_KEY = 'restrictedWordsExp';
    static CONST_ERROR_BAD_REQUEST = "The request contains invalid or forbidden characters. Please recheck and try again!";
}
exports.Constants = Constants;
