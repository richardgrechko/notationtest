let t = 1;
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
			E = a.toFixed(6) + ((c < 5) ? layers[c-1] : ("[" + c + "]")) + b
		}
	}
	return E
}
setInterval(function()
{
	t += .001
	text = layer(10**(10**(t%1)%1),Math.floor(10**(t%1)),Math.floor(t))
	document.getElementById("text").innerHTML = text
}, 30)
