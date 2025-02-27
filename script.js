let x = 1;
let y = 0;
let z = 1;
let text;
function layer(a,b,c)
{
	c = Math.floor(c)
	let layers = "eFGH"
	let E = ""
	if (c === 1)
	{
		if (b < 6)
		{
			E = (a * (10**b)).toFixed(3)
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
			if (c === 2)
			{
				if (b === 1)
				{
					E = layer(10**(a%1),Math.floor(a),c-1)
				}
				else
				{
					E = ((b==1) ? "" : ((c-1) < 5) ? layers[c-2] : ("[" + (c-1) + "]")).repeat(b-2) + layer(10**((10**a)%1),Math.floor(10**a),c-1)
				}
			}
			else
			{
				E = ((b==1) ? "" : ((c-1) < 5) ? layers[c-2] : ("[" + (c-1) + "]")).repeat(b-1) + layer(10**(a%1),Math.floor(a),c-1)
			}
		}
		else
		{
			E = ((c < 5) ? layers[c-1] : ("[" + c + "]")) + (b+Math.log10(a)).toFixed(6)
		}
	}
	return E
}
setInterval(function()
{
	x *= 1.01+(y/100);
	if (x >= 10)
	{
		y += 1;
		x = (x%10)+1
	}
	text = layer(x,(y%8)+2,Math.floor(y/8)+2)
	document.getElementById("text").innerHTML = text
}, 30)
