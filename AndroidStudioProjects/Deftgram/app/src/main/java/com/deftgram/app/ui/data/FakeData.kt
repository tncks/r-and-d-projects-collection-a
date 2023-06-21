package com.deftgram.app.ui.data


import com.deftgram.app.ui.screens.home.Message
import com.deftgram.app.ui.screens.home.HomeUiState
import com.deftgram.app.ui.profile.ProfileScreenState
import com.deftgram.app.R
import com.deftgram.app.ui.screens.mzinfo.MzinfoUiState


private val initialMessages2 = listOf(
    Message(
        "me",
        "Check it out!",
        "8:07 PM"
    ),
    Message(
        "me",
        "Thank you!",
        "8:06 PM",
        R.drawable.sticker
    ),
    Message(
        "Taylor Brooks",
        "You can use all the same stuff",
        "8:05 PM"
    ),
    Message(
        "Taylor Brooks",
        "@ali Take a look at the `Flow.collectAsStateWithLifecycle()` APIs",
        "8:05 PM"
    ),
    Message(
        "John Glenn",
        "Compose newbie as well, have you looked at the JetNews sample? Most blog posts end up " +
                "out of date pretty fast but this sample is always up to date and deals with async " +
                "data loading (it's faked but the same idea applies) \uD83D\uDC49" +
                "https://github.com/android/compose-samples/tree/master/JetNews",
        "8:04 PM"
    ),
    Message(
        "me",
        "Compose newbie: I’ve scourged the internet for tutorials about async data loading " +
                "but haven’t found any good ones. What’s the recommended way to load async " +
                "data and emit composable widgets?",
        "8:03 PM"
    )
)


val sampleUiState = HomeUiState(
    initialMessages = initialMessages2,
    channelName = "#chathome",
    channelMembers = 45
)

val infoUiState = MzinfoUiState(
    channelName = "#emptymz",
    channelMembers = 10
)



val colleagueProfile = ProfileScreenState(
    userId = "12345",
    photo = R.drawable.someone_else,
    name = "Taylor Brooks",
    status = "Away",
    displayName = "taylor",
    position = "Senior Android Dev at Open",
    twitter = "twitter.com/taylor",
    timeZone = "12:25 AM local time (Eastern Daylight Time)",
    commonChannels = "2"
)


val meProfile = ProfileScreenState(
    userId = "me",
    photo = R.drawable.ali,
    name = "Ali Brook",
    status = "Online",
    displayName = "ali",
    position = "Senior Android Dev at Year\nGoogle Developer Expert",
    twitter = "twitter.com/ali",
    timeZone = "In your timezone",
    commonChannels = null
)
