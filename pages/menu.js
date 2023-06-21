document.write(`

	<div class="hcenter_nav">
		<img id="navlogo"src="../img/logo.png"/>   
		<table>
			<td id="nav2"><a href="../home.html">HOME</a></td>
			<td id="nav2"><a href="puzzle.html">PUZZLE</a></td>
			<td id="nav2"><a href="info.html#secP_homeBal">MGA BALBAL</a></td>
			<td id="nav2"><a href="about.html">ABOUT</a></td>
		</table>
		<div class="vcenter_nav1"><img src="../img/heart.png"></div>
	</div>  

`);

function showDiv(div) {
    var a = document.getElementById("puzzle1");
    var b = document.getElementById("puzzle2");
    var c = document.getElementById("puzzle3");
    var d = document.getElementById("puzzle4");

	if (div == 1){
		if (a.style.width === "65vw") {
			a.style.width = "3vw";
		  } else {
			a.style.width = "65vw";
		}

		b.style.width = "3vw";
		c.style.width = "3vw";
		d.style.width = "3vw";

	} else if (div == 2) {
		if (b.style.width === "65vw") {
			b.style.width = "3vw";
		  } else {
			b.style.width = "65vw";
		}

		a.style.width = "3vw";
		c.style.width = "3vw";
		d.style.width = "3vw";

	}else if (div == 3){
		if (c.style.width === "65vw") {
			c.style.width = "3vw";
		  } else {
			c.style.width = "65vw";
		}

		a.style.width = "3vw";
		b.style.width = "3vw";
		d.style.width = "3vw";

	}else{
		if (d.style.width === "65vw") {
			d.style.width = "3vw";
		  } else {
			d.style.width = "65vw";
		}

		b.style.width = "3vw";
		c.style.width = "3vw";
		a.style.width = "3vw";
	}
}
