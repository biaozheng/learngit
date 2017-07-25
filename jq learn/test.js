const tmpl = addrs => `
	<table>
	${addrs.map(addr=> `
	  <tr><td>${addr.first}</td></tr>
	  <tr><td>${addr.last}</td></tr>
	`).join('')}
	</table>
`;
const data = [
	{first: '<Jane>', last: 'Bond'},
	{first: 'Lars',last: '<Croft>'},
];

console.log(tmpl(data));

var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals){
	var result = '';
	var i = 0;

	while(i < literals.length){
		result += literals[i++];
		if(i < arguments.length){
			result += arguments[i];
		}
	}
	return result;
}

console.log``;