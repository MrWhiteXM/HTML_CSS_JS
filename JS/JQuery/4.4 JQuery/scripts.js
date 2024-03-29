$(() => {
	$("#div1, #div2, #div3").hide();

	$("#mostrarDivs").click(function (e) {
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(2000);
		$("#div3").fadeIn(3000);
	});

	$("#ocultarDivs").click(function (e) {
		$("#div1").fadeOut(1000);
		$("#div2").fadeOut(2000);
		$("#div3").fadeOut(3000);
	});

	$("#mostrarOcultarDivs").click(function (e) {
		$("#div1").fadeToggle(1000);
		$("#div2").fadeToggle(2000);
		$("#div3").fadeToggle(3000);
	});

	$("#cambiarOpacidad").click(function (e) {
		$("#div1").fadeTo(1000, 0.1);
		$("#div2").fadeTo(2000, 0.5);
		$("#div3").fadeTo(3000, 0.8);
	});

	$("#div_imagenes").hover(function (e) {

		$("#div_imagenes").fadeTo(1000, 1);

	}, function (e) {
		$("#div_imagenes").fadeTo(1000, 0.5);
	});

	$(".acordeon").find("h2").click(function (e) {
		if (e.target.id == "h2_4") {
			$(e.target).nextAll().show();
			setTimeout(function () {
				$(e.target).nextAll().slideUp();
			}, 3000);
		} else {
			$(e.target).nextAll().slideDown(); //Mostrar imagen y párrafo
			// h2 -> div -> div_anterior -> h2/img/p -> img/p -> slideup()
			$(e.target).parent().prevAll().children().nextAll().slideUp(); //Ocultar la imagen y párrafo del div anterior (si lo hubiera)
			// h2 -> div -> div_siguiente -> h2/img/p -> img/p -> slideup()
			$(e.target).parent().nextAll().children().nextAll().slideUp(); //Ocultar la imagen y párrafo del div siguiente (si lo hubiera)
			$(e.target).css("background-color", $(e.target).siblings(":last").css("background-color")); //Cambiar de color
		}
	});

	$("#animacion").click(function (e) {
		$(e.target).animate({
			float: "right"
		});
	});

	$("#btn_animacion").click(function (e) {
		$("#animacion").animate({
			position: "relative",
			left: "300px",
			opacity: "0.5",
			width: "200px",
			height: "200px",
			"background-color": "red"
		});
	});

	$("#btn_animacion_2").click(function (e) {
		$("#animacion_2").animate({
			position: "relative",
			left: "30px",
			width: "120px",
			height: "120px",
			opacity: "0.9"
		});
	});
	$("#btn_quitar_animacion").click(function (e) {
		$("#animacion_2").animate({
			left: "0px",
			width: "100px",
			height: "100px",
			opacity: "1"
		});
	});

	$("#titulo").animate({
		width: "100%",
		opacity: "1",
		"font-size": "2em"
	});

	$("#icono").click(function (e) {

		if ($("#menu").css("marginLeft") != "0px") {
			$("#menu").animate({
				"margin-left": "0px"
			}, 2000);
		} else {
			$("#menu").animate({
				"margin-left": -Math.abs(parseInt($("#menu").css("width").replace("px", ""))) + "px" // margin-left: -100%;
			}, 2000);
		}
	});
});