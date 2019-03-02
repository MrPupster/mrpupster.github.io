// НУ А СЮДА-ТО ТЫ ЗАЧЕМ ЗАЛЕЗ?

function hideLoadingImage() {
    setTimeout(function () {
        $("#iframeLoader").hide();
        $("#chat").fadeIn(1000);
        $(function () {
            $("#chatsidebar").resizable();
        });
    }, 500);
}

function handleInputFocus() {
    $(':input[type="number"]').focusin(function () {
        setInputFocus(true);
    });
    $(':input[type="number"]').focusout(function () {
        setInputFocus(false);
    });
    $(':input[type="text"]').focusin(function () {
        setInputFocus(true);
    });
    $(':input[type="text"]').focusout(function () {
        setInputFocus(false);
    });
}

function setInputFocus(value) {
    inputFieldInFocus = value;
}

function isInputFocus() {
    return inputFieldInFocus;
}