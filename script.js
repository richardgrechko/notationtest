let x = 1;
let y = 0;
let text; //restarting e
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
function z()
{
	if (x >= 10)
	{
		y += 1;
		x -= 8
		return true;
	}
	return false;
}
setInterval(function()
{
	x *= 1.01+(y+1)/100;
	while(z())
	text = layer(10**(x%1),Math.floor(x%8)+2,y+1)
	document.getElementById("text").innerHTML = text
}, 30)
