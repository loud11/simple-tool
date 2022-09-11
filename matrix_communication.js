const sdk = require("matrix-js-sdk");
const inputUserId = "@jjm_puppet_master:matrix.org"; // can be achieved by access %APPDATA%\element\indexedDB\~~~~.log inside file -> mx_user_id@jjm_puppet_master:matrix.org
const inputUserAccessToken = "syt_amptX3B1cHBldF9tYXN0ZXI_VvuozRzNcFwmWzpJwMra_3Rkh6A";//"syt_amptX3B1cHBldF9tYXN0ZXI_GLXNAlYQPdBTHzVFksVt_2A8XIz";//"syt_amptX3B1cHBldF9tYXN0ZXI_FOblkWLenDscDLRgfaht_0YEkGT";//"syt_amptX3B1cHBldF9tYXN0ZXI_BTRUzLpIQNjmTVAHftvU_3tJKld"; // syt_amptX3B1cHBldF9tYXN0ZXI_WiMlqYBbsUZYeQIImYZn_4ebCW8 can be achieved by access %APPDATA%\element\indexedDB\~~~~.log mx_access_token "~~~~~"
const element_home_server ="https://matrix-client.matrix.org";// "https://matrix.org" ;//
const testClient = sdk.createClient({
        baseUrl: element_home_server,
        accessToken: inputUserAccessToken,
        userId: inputUserId 
    });


testClient.on("Room.timeline", function(event, room, toStartOfTimeline) {
    if (toStartOfTimeline) {
        return;
    }
    console.log(
        "(%s) %s :: %s", room.name, event.getSender(), event.getContent().body
    );
    console.log("%s", event.getContent())
    console.log("--------------------------------------------------------")
});

testClient.startClient(); 