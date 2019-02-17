$(document).ready(function () {
    $("#bnt").hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#btn").fadeIn("fast");
        } else {
            $("#btn").fadeOut("fast");
        }
        dH = $(document).height(); //ドキュメントの高さ 
        sP = $(window).height() + $(window).scrollTop(); //現在地 

        fh = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）


        if (dH - sP <= fh - 20) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
            $("#btn").css({
                "position": "fixed",
                "bottom": (sP - (dH - fh))
            });
        } else { //それ以外の場合は
            $("#btn").css({
                "position": "fixed", //固定表示
                "bottom": "20px" //下から20px上げた位置に
            });
        }
    });

    $('#btn').click(function () { // #Btnをクリックすると
        $('body,html').animate({ // いちばん上にanimateする
            scrollTop: 0 // 戻る位置
        }, 1000); // 戻るスピード
        return false;
    });




});

