const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
		/* полезный код */
		const arr = expr.match(/.{1,10}/g);
		const resultArr = arr.map((item) => {
			if (item === "**********") {
				return " ";
			}
			
			const byteCharArr = item.match(/.{1,2}/g);
			const morzeCharArr = byteCharArr.map((item) => {
				switch (item) {
					case "00":
						return "";
						
					case "10":
						return "."
						
					case "11":
						return "-";
				}
			});
			
			return MORSE_TABLE[morzeCharArr.join("")];
		});
		
		/* полезный код */
		
		return resultArr.join("");
}

module.exports = {
    decode
}
