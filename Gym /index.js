	var image1 = new Image();
	var image2 = new Image();
	var image3 = new Image();
	var image4 = new Image();
	var image5 = new Image();
	image1.src="girlOne.jpg";
	image2.src = "girlTwo.jpg";
	image3.src = "girlThree.jpg";
	
	function slideit() {

			document.images.slide.src=eval("image" +one+ ".src")

			if(one<3) {

				one++; }
			else 
				one = 1;
			setTimeout("slideit()",2500);
			//-->
		}
		slideit();