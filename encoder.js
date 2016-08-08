
function encode(weapon, mains, subs) {
	var hexString = hex8(weapon.id);
	var abilities = "";
	for(var i = 0; i < 3; i++){
		if(i+1<=mains.length) {
			abilities += bin5(mains[i].id)
		} else {
			abilities += bin5(0)
		}
	}
	for(var i = 0; i < 9; i++){
		if(i+1<=subs.length) {
			abilities += bin5(subs[i].id)
		} else {
			abilities += bin5(0)
		}
	}
	if(abilities != "") {
		hexString += binaryToHex(abilities).result;
	}
	return hexString.replace(/0+$/g, '');
};

function hex8(val) {
	val &= 0xFF;
	var hex = val.toString(16).toLowerCase();
	return ("00" + hex).slice(-2);
}

function bin5(val) {
	var bin= val.toString(2);
	bin="00000".substr(bin.length)+bin;
	return bin;
}

function decode(code) {
	if(code.length>17) {
		console.log("invalid code")
		return false;
	}
	while(code.length<17) {
		code=code+='0'
	}

	var weaponid = parseInt(code.substring(0,2),16)
	var rawabilities = hexToBinary(code.substring(2)).result
	var abilities = [];
	for (var i = 0; i < rawabilities.length; i += 5) {
		abilities.push(parseInt(rawabilities.substring(i, i + 5),2));
	}
	return [weaponid, abilities];
}
	
function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length-1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i+1-4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                return { valid: false };
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'a'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return { valid: false };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return { valid: true, result: ret };
}

// converts hexadecimal string to a binary string
// returns an object with key 'valid' to a boolean value, indicating
// if the string is a valid hexadecimal string.
// If 'valid' is true, the converted binary string can be obtained by
// the 'result' key of the returned object
function hexToBinary(s) {
    var i, k, part, ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
        'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
        if (lookupTable.hasOwnProperty(s[i])) {
            ret += lookupTable[s[i]];
        } else {
            return { valid: false };
        }
    }
    return { valid: true, result: ret };
}
