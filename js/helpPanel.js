// НУ А СЮДА-ТО ТЫ ЗАЧЕМ ЗАЛЕЗ?

/*
 * helpPanel.js
 * 
 */
(function () {

    /**
     * @function toggleTwitchChat
     */
    function toggleTwitchChat() {
        if ($("#chatsidebar").is(":visible")) {
            $("#chatsidebar").fadeOut(1000);
        } else {
            $("#chatsidebar").fadeIn(1000);
        }
    }

    /**
     * @function toggleTwitchChatRollup
     */
    function toggleTwitchChatRollup() {
        if ($("#chat").is(":visible")) {
            $(function () {
                $("#chatsidebar").resizable('disable');
            });
            chatHeight = $("#chatsidebar").height();
            $("#chat").fadeOut(1000);
            setTimeout(function () {
                $("#chatsidebar").height(20);
            }, 1000);
        } else {
            $("#chatsidebar").height(chatHeight);
            $("#chat").fadeIn(1000);
            $(function () {
                $("#chatsidebar").resizable('enable');
            });
        }
    }

    function toggleTwitchPlayer() {
        if ($("#playersidebar").is(":visible")) {
            $("#playersidebar").fadeOut(1000);
        } else {
            $("#playersidebar").fadeIn(1000);
        }
    }

    /**
     * @function toggleTwitchChatRollup
     */
    function toggleTwitchPlayerRollup() {
        if ($("#player").is(":visible")) {
            $(function () {
                $("#playersidebar").resizable('disable');
            });
            chatHeight = $("#playersidebar").height();
            $("#player").fadeOut(1000);
            setTimeout(function () {
                $("#playersidebar").height(30);
            }, 1000);
        } else {
            $("#playersidebar").height(chatHeight);
            $("#player").fadeIn(1000);
            $(function () {
                $("#playersidebar").resizable('enable');
            });
        }
    }

    // Import the HTML file for this panel.
    $("#helpPanel").load("help.html");

    // Export to HTML
    $.toggleTwitchChat = toggleTwitchChat;
    $.toggleTwitchChatRollup = toggleTwitchChatRollup;
    $.toggleTwitchPlayer = toggleTwitchPlayer;
    $.toggleTwitchPlayerRollup = toggleTwitchPlayerRollup;

})();