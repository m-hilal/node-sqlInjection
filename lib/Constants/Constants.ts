export class Constants
{
    static readonly CONST_VALIDATION_TITLE = 'sqlInjection';
    static readonly CONST_DEFAULT_RESTRICTED_CHARACTERS_IN_PAYLOAD = '/[<>?*()]/i';
    static readonly CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD = "/(UNION)|(SELECT)|(INSERT)|(DROP)|(CREATE)|(Truncate)|(DELETE)|(ALTER)|(%0A)|(%0D)|(%00)|(1=1)|('( )*'=)|(1--)|('1'='1)|(admin( )*--)|(%21)|(1( )*'( )*--)/i";
    static readonly CONST_RESTRICTED_CHARACTERS_KEY = 'restrictedCharactersExp';
    static readonly CONST_RESTRICTED_WORDS_KEY = 'restrictedWordsExp';
    static readonly CONST_ERROR_BAD_REQUEST = "The request contains invalid or forbidden characters. Please recheck and try again!";
}