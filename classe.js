//Sélectionner tout
$(document).ready(function () {
    $("button").click(function () {
        $("div.carre, div.cercle, div.losange").addClass("fill");
    });
});

//Déselectionner tout
$(document).ready(function () {
    $("button.empty").click(function () {
        $("div.carre, div.cercle, div.losange").removeClass("fill");
    });
});

//(dé)Sélectionner juste un cercle en particulier
$(document).ready(function () {
    $("div.cercle").click(function () {
        $(this).toggleClass("fill");
    });
});

//(dé)Sélectionner juste un carré en particulier et ses cercles
$(document).ready(function () {
    $("div#carre1").click(function () {
        if($("div#carre1").hasClass("fill")){
            $("div#carre1, div#cercle5, div#cercle9, div#cercle13, div#cercle17").removeClass("fill");
        }
        else{
        $("div#carre1, div#cercle5, div#cercle9, div#cercle13, div#cercle17").addClass("fill");
        }
    });
});

$(document).ready(function () {
    $("div#carre2").click(function () {
        if($("div#carre2").hasClass("fill")){
            $("div#carre2, div#cercle1, div#cercle10, div#cercle14, div#cercle18").removeClass("fill");
        }
        else{
        $("div#carre2, div#cercle1, div#cercle10, div#cercle14, div#cercle18").addClass("fill");
        }
    });
});

$(document).ready(function () {
    $("div#carre3").click(function () {
        if($("div#carre3").hasClass("fill")){
            $("div#carre3, div#cercle3, div#cercle7, div#cercle11, div#cercle20").removeClass("fill");
        }
        else{
        $("div#carre3, div#cercle3, div#cercle7, div#cercle11, div#cercle20").addClass("fill");
        }
    });
});

$(document).ready(function () {
    $("div#carre4").click(function () {
        if($("div#carre4").hasClass("fill")){
            $("div#carre4, div#cercle4, div#cercle8, div#cercle12, div#cercle16").removeClass("fill");
        }
        else{
        $("div#carre4, div#cercle4, div#cercle8, div#cercle12, div#cercle16").addClass("fill");
        }
    });
});

//(dé)Sélectionner le losange et ses cercles
$(document).ready(function () {
    $("div.losange").click(function () {
        if($("div.losange").hasClass("fill")){
            $("div.losange, div#cercle2, div#cercle6, div#cercle9, div#cercle10, div#cercle11, div#cercle12, div#cercle15, div#cercle19").removeClass("fill");
        }
        else{
        $("div.losange, div#cercle2, div#cercle6, div#cercle9, div#cercle10, div#cercle11, div#cercle12, div#cercle15, div#cercle19").addClass("fill");
        }
    });
});