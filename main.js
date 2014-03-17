var getSeconds = function (userString) {
	var splitEm = userString.split(':');
	return splitEm[0]*60 + splitEm[1]*1;
};
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
