function layer(a,b,c)
{
	c = Math.floor(c)
	console.log("layer", [a,b,c])
	let layers = "eFGH"
	let E = ""
	if (c === 1)
	{
		if (b < 6)
		{
			E = a * (10**b)
		}
		else
		{
			E = a.toFixed(6) + "e" + b
		}
	}
	else if (c > 1)
	{
		if (b < 5)
		{
			E = ((c < 4) ? layers[c-2] : ("[" + c + "]")).repeat(b-1) + layer(10**(a%1),Math.floor(a),c-1)
		}
		else
		{
			E = a.toFixed(6) + ((c < 4) ? layers[c-1] : ("[" + c + "]")) + b
		}
	}
	return E
}
