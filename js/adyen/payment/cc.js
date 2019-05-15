/*Cardtype format: name, starting numbers ( , separated, (is not a range)), number of digits ( , separated)  */
var Cards = new makeArray(34);
Cards[0] = new CardType("MC", "51,52,53,54,55,22,23,24,25,26,27", "16");
var MasterCard = Cards[0];
Cards[1] = new CardType("visadankort", "4571", "16");
var VisaDankort = Cards[1];
Cards[2] = new CardType("VI", "4", "13,16");
var VisaCard = Cards[2];
Cards[3] = new CardType("AE", "34,37", "15");
var AmExCard = Cards[3];
Cards[4] = new CardType("vias", "9", "16");
var AdyenCard = Cards[4];
Cards[5] = new CardType("DC", "36", "14");
var DinersClubCard = Cards[5];
Cards[6] = new CardType("maestrouk", "6759", "16,18,19");
var MaestroUKCard = Cards[6];
Cards[7] = new CardType("solo", "6767", "16,18,19");
var SoloCard = Cards[7];
Cards[8] = new CardType("laser", "6304,6706,677117,677120", "16,17,18,19");
var LaserCard = Cards[8];
Cards[9] = new CardType("DI", "6011,644,645,646,647,648,649,65", "16");
var DiscoverCard = Cards[9];
Cards[10] = new CardType("JCB", "3528,3529,353,354,355,356,357,358", "16,19");
var JCBCard = Cards[10];
Cards[11] = new CardType("bcmc", "479658,606005,6703", "16,17,18,19");
var Bcmc = Cards[11];
Cards[12] = new CardType("bijcard", "5100081", "16");
var BijCard = Cards[12];
Cards[13] = new CardType("dankort", "5019", "16");
var Dankort = Cards[13];
Cards[14] = new CardType("hipercard", "606282", "16");
var Hipercard = Cards[14];
Cards[15] = new CardType("SM", "50,56,57,58,6", "16,17,18,19");
var MaestroCard = Cards[15];
Cards[16] = new CardType("ELO", "401178,401179,438935,451416,457632,457393,431274,438935,457631,457632,506699,50670,50671,50672,50673,50674,50675,50676,506770,506771,506772,506773,506774," +
    "506775,506776,506777,506778,504175,627780,636297,636368,651652,651653,651654,651655,651656,651657,651658,651659,65166,65167,509,650031,650032,650033,650035,650036,650037,650038,650039,65004,650050,650051" +
    "65500,65501,650485,650486,650487,650488,650489,65049,65050,65051,65052,650530,650531,650532,650533,650534,650535,650536,650537,650538,650541,650542,650543," +
    "650544,650545,650546,650547,650548,650549,65055,65056,65057,65058,650590,650591,650592,650593,650594,650595,650596,650597,650598,65070,650710,650711,650712,650713,650714,650715,650716,650717," +
    "650718,650720,650721,650722,650723,650724,650725,650726,650727,655021,655022,655023,655024,655025,655026,655027,655028,655029,65503,65504,655050,655051,655052,655053,655054,655055,655056,655057," +
    "655058,650901,650902,650903,650904,650905,650906,650907,650908,650909,65091,65092,65093,65094,65095,65096,650970,650971,650972,650973,650974,650975,650976,650977,650978," +
    "650405,650406,650407,650408,650409,65041,65042,65043", "16");
var Elo = Cards[16];
Cards[17] = new CardType("uatp", "1", "15");
var Uatp = Cards[17];
Cards[18] = new CardType("unionpay", "62", "14,15,16,17,18,19");
var Cup = Cards[18];
Cards[19] = new CardType("cartebancaire", "4,5,6", "16");
var CarteBancaire = Cards[19];
Cards[20] = new CardType("visaalphabankbonus", "450903", "16");
var VisAlphaBankBonus = Cards[20];
Cards[21] = new CardType("mcalphabankbonus", "510099", "16");
var McAlphaBankBonus = Cards[21];
Cards[22] = new CardType("hiper", "637095,637599,637609,637612", "16");
var Hiper = Cards[22];
Cards[23] = new CardType("oasis", "982616", "16");
var Oasis = Cards[23];
Cards[24] = new CardType("karenmillen", "98261465", "16");
var Karenmillen = Cards[24];
Cards[25] = new CardType("warehouse", "982633", "16");
var Warehouse = Cards[25];
Cards[26] = new CardType("mir", "220", "16,17,18,19");
var Mir = Cards[26];
Cards[27] = new CardType("codensa", "590712", "16");
var Codensa = Cards[27];
Cards[28] = new CardType("naranja", "377798,377799,402917,402918,527571,527572,589562", "16,17,18,19");
var Naranja = Cards[28];
Cards[29] = new CardType("cabal", "589657,600691,603522,6042,6043,636908", "16,17,18,19");
var Cabal = Cards[29];
Cards[30] = new CardType("shopping", "2799,589407,603488", "16,17,18,19");
var Shopping = Cards[30];
Cards[31] = new CardType("argencard", "501105", "16,17,18,19");
var Argencard = Cards[31];
Cards[32] = new CardType("troy", "9792", "16");
var Troycard = Cards[32];

var LuhnCheckSum = Cards[33] = new CardType();


/*************************************************************************\
 CheckCardNumber(form)
 function called when users click the "check" button.
 \*************************************************************************/
function CheckCardNumber(cardNumber, expYear, expMon, cardType) {
    var tmpyear;

    if (cardNumber.length == 0) {
        alert("Please enter a Card Number.");
        return false;
    }

    if (expYear.length == 0) {
        alert("Please enter the Expiration Year.");
        return false;
    }

    if (expYear > 96)
        tmpyear = "19" + expYear;
    else if (expYear < 21)
        tmpyear = "20" + expYear;
    else {
        alert("The Expiration Year is not valid.");
        return false;
    }

    tmpmonth = expMon;
    // The following line doesn't work in IE3, you need to change it
    // to something like "(new CardType())...".
    // if (!CardType().isExpiryDate(tmpyear, tmpmonth)) {
    if (!(new CardType()).isExpiryDate(tmpyear, tmpmonth)) {
        alert("This card has already expired.");
        return false;
    }
    card = cardType;
    var retval = eval(card + ".checkCardNumber(\"" + cardNumber + "\", " + tmpyear + ", " + tmpmonth + ");");
    cardname = "";

    if (retval) {
        // comment this out if used on an order form
        return true;
    }
    else {
        // The cardnumber has the valid luhn checksum, but we want to know which
        // cardtype it belongs to.
        for (var n = 0; n < Cards.size; n++) {
            if (Cards[n].checkCardNumber(cardNumber, tmpyear, tmpmonth)) {
                cardname = Cards[n].getCardType();
                break;
            }
        }
        if (cardname.length > 0) {
            alert("This looks like a " + cardname + " number, not a " + card + " number.");
        }
        else {
            alert("This card number is not valid.");
        }
    }
}

/*************************************************************************\
 Object CardType([String cardtype, String rules, String len, int year,
 int month])
 cardtype    : type of card, eg: MasterCard, Visa, etc.
 rules       : rules of the cardnumber, eg: "4", "6011", "34,37".
 len         : valid length of cardnumber, eg: "16,19", "13,16".
 year        : year of expiry date.
 month       : month of expiry date.
 eg:
 var VisaCard = new CardType("Visa", "4", "16");
 var AmExCard = new CardType("AmEx", "34,37", "15");
 \*************************************************************************/
function CardType() {
    var n;
    var argv = CardType.arguments;
    var argc = CardType.arguments.length;

    this.objname = "object CardType";

    var tmpcardtype = (argc > 0) ? argv[0] : "CardObject";
    var tmprules = (argc > 1) ? argv[1] : "0,1,2,3,4,5,6,7,8,9";
    var tmplen = (argc > 2) ? argv[2] : "13,14,15,16,19";

    this.setCardNumber = setCardNumber;  // set CardNumber method.
    this.setCardType = setCardType;  // setCardType method.
    this.setLen = setLen;  // setLen method.
    this.setRules = setRules;  // setRules method.
    this.setExpiryDate = setExpiryDate;  // setExpiryDate method.

    this.setCardType(tmpcardtype);
    this.setLen(tmplen);
    this.setRules(tmprules);
    if (argc > 4)
        this.setExpiryDate(argv[3], argv[4]);

    this.checkCardNumber = checkCardNumber;  // checkCardNumber method.
    this.getExpiryDate = getExpiryDate;  // getExpiryDate method.
    this.getCardType = getCardType;  // getCardType method.
    this.isCardNumber = isCardNumber;  // isCardNumber method.
    this.isExpiryDate = isExpiryDate;  // isExpiryDate method.
    this.luhnCheck = luhnCheck;// luhnCheck method.
    return this;
}

/*************************************************************************\
 boolean checkCardNumber([String cardnumber, int year, int month])
 return true if cardnumber pass the luhncheck and the expiry date is
 valid, else return false.
 \*************************************************************************/
function checkCardNumber() {
    var argv = checkCardNumber.arguments;
    var argc = checkCardNumber.arguments.length;
    var cardnumber = (argc > 0) ? argv[0] : this.cardnumber;
    var year = (argc > 1) ? argv[1] : this.year;
    var month = (argc > 2) ? argv[2] : this.month;

    this.setCardNumber(cardnumber);
    this.setExpiryDate(year, month);

    if (!this.isCardNumber())
        return false;
    if (!this.isExpiryDate())
        return false;

    return true;
}

/*************************************************************************\
 String getCardType()
 return the cardtype.
 \*************************************************************************/
function getCardType() {
    return this.cardtype;
}

/*************************************************************************\
 String getExpiryDate()
 return the expiry date.
 \*************************************************************************/
function getExpiryDate() {
    return this.month + "/" + this.year;
}

/*************************************************************************\
 boolean isCardNumber([String cardnumber])
 return true if cardnumber pass the luhncheck and the rules, else return
 false.
 \*************************************************************************/
function isCardNumber() {
    var argv = isCardNumber.arguments;
    var argc = isCardNumber.arguments.length;
    var cardnumber = (argc > 0) ? argv[0] : this.cardnumber;
    if (!this.luhnCheck())
        return false;

    for (var n = 0; n < this.len.size; n++)
        if (cardnumber.toString().length == this.len[n]) {
            for (var m = 0; m < this.rules.size; m++) {
                var headdigit = cardnumber.substring(0, this.rules[m].toString().length);
                if (headdigit == this.rules[m])
                    return true;
            }
            return false;
        }
    return false;
}

/*************************************************************************\
 boolean isExpiryDate([int year, int month])
 return true if the date is a valid expiry date,
 else return false.
 \*************************************************************************/
function isExpiryDate() {
    var argv = isExpiryDate.arguments;
    var argc = isExpiryDate.arguments.length;

    year = argc > 0 ? argv[0] : this.year;
    month = argc > 1 ? argv[1] : this.month;

    if (!isNum(year + ""))
        return false;

    if (!isNum(month + ""))
        return false;

    today = new Date();
    expiry = new Date(year, month);

    if (today.getTime() > expiry.getTime())
        return false;
    else
        return true;
}

/*************************************************************************\
 boolean isNum(String argvalue)
 return true if argvalue contains only numeric characters,
 else return false.
 \*************************************************************************/
function isNum(argvalue) {
    argvalue = argvalue.toString();

    if (argvalue.length == 0)
        return false;

    for (var n = 0; n < argvalue.length; n++)
        if (argvalue.substring(n, n + 1) < "0" || argvalue.substring(n, n + 1) > "9")
            return false;
    return true;
}

/*************************************************************************\
 boolean luhnCheck([String CardNumber])
 return true if CardNumber pass the luhn check else return false.
 Reference: http://www.ling.nwu.edu/~sburke/pub/luhn_lib.pl
 \*************************************************************************/
function luhnCheck() {
    var argv = luhnCheck.arguments;
    var argc = luhnCheck.arguments.length;

    var CardNumber = argc > 0 ? argv[0] : this.cardnumber;

    if (!isNum(CardNumber)) {
        return false;
    }

    var no_digit = CardNumber.length;
    var oddoeven = no_digit & 1;
    var sum = 0;

    for (var count = 0; count < no_digit; count++) {
        var digit = parseInt(CardNumber.charAt(count));
        if (!((count & 1) ^ oddoeven)) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
    }

    if (sum % 10 == 0)
        return true;
    else
        return false;
}

/*************************************************************************\
 ArrayObject makeArray(int size)
 return the array object in the size specified.
 \*************************************************************************/
function makeArray(size) {
    this.size = size;
    return this;
}

/*************************************************************************\
 CardType setCardNumber(cardnumber)
 return the CardType object.
 \*************************************************************************/
function setCardNumber(cardnumber) {
    this.cardnumber = cardnumber;
    return this;
}

/*************************************************************************\
 CardType setCardType(cardtype)
 return the CardType object.
 \*************************************************************************/
function setCardType(cardtype) {
    this.cardtype = cardtype;
    return this;
}

/*************************************************************************\
 CardType setExpiryDate(year, month)
 return the CardType object.
 \*************************************************************************/
function setExpiryDate(year, month) {
    this.year = year;
    this.month = month;
    return this;
}

/*************************************************************************\
 CardType setLen(len)
 return the CardType object.
 \*************************************************************************/
function setLen(len) {
    // Create the len array.
    if (len.length == 0 || len == null)
        len = "13,14,15,16,19";

    var tmplen = len;
    n = 1;
    while (tmplen.indexOf(",") != -1) {
        tmplen = tmplen.substring(tmplen.indexOf(",") + 1, tmplen.length);
        n++;
    }

    this.len = new makeArray(n);
    n = 0;
    while (len.indexOf(",") != -1) {
        var tmpstr = len.substring(0, len.indexOf(","));
        this.len[n] = tmpstr;
        len = len.substring(len.indexOf(",") + 1, len.length);
        n++;
    }
    this.len[n] = len;
    return this;
}

/*************************************************************************\
 CardType setRules()
 return the CardType object.
 \*************************************************************************/
function setRules(rules) {
    // Create the rules array.
    if (rules.length == 0 || rules == null)
        rules = "0,1,2,3,4,5,6,7,8,9";

    var tmprules = rules;
    n = 1;
    while (tmprules.indexOf(",") != -1) {
        tmprules = tmprules.substring(tmprules.indexOf(",") + 1, tmprules.length);
        n++;
    }
    this.rules = new makeArray(n);
    n = 0;
    while (rules.indexOf(",") != -1) {
        var tmpstr = rules.substring(0, rules.indexOf(","));
        this.rules[n] = tmpstr;
        rules = rules.substring(rules.indexOf(",") + 1, rules.length);
        n++;
    }
    this.rules[n] = rules;
    return this;
}


/*****************\
 * helpers
 \*****************/

function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

/*****************\

 Added

 \*****************/
function getBaseCard(cardnumber, availablecards) {
    //for each card (except the luhncheck card (last element))
    var match = null;
    var maxmatchlength = -1;
    for (var i = 0; i < (Cards.size - 1); i++) {
        //for each card length
        for (var n = 0; n < Cards[i].len.size; n++) {
            if (cardnumber.toString().length <= Cards[i].len[n]) {
                for (var m = 0; m < Cards[i].rules.size; m++) {
                    // Get the max length
                    var l = Cards[i].rules[m].toString().length;
                    // If the length of the rule is longer than the cardnumber, it is still a potential candidate
                    if (l > cardnumber.toString().length) {
                        l = cardnumber.toString().length;
                    }
                    var headdigit = cardnumber.substring(0, l);
                    var headruledigit = Cards[i].rules[m].toString().substring(0, l);
                    if (headdigit === headruledigit) {
                        if (contains(availablecards, Cards[i].cardtype) && l > maxmatchlength) {
                            //alert("cc type: "+Cards[i].getCardType());
                            match = Cards[i];
                            maxmatchlength = l;
                        }
                        //See if the card is a MaestroCard which is a sub-brand of Mastercard
                        //TODO make this change generic for all card and subcards if required
                        if (contains(availablecards, MasterCard.cardtype)) {
                            if (Cards[i].cardtype === MaestroCard.cardtype && l > maxmatchlength) {
                                match = MasterCard;
                                maxmatchlength = l;
                            }
                        }
                    }
                }
            }
        }
    }
    return match;
}

function getBaseCardByType(variant) {
    //for each card (except the luhncheck card (last element))
    for (var i = 0; i < (Cards.size - 1); i++) {
        if (Cards[i].cardtype == variant) {
            return Cards[i];
        }
    }
    return null;
}



