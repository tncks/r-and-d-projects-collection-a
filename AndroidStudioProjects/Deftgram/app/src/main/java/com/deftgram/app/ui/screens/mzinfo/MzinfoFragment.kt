package com.deftgram.app.ui.screens.mzinfo

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.compose.ui.platform.ComposeView
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import com.deftgram.app.ui.MainViewModel
import com.deftgram.app.ui.data.infoUiState
import com.deftgram.app.ui.theme.DeftgramTheme

class MzinfoFragment : Fragment() {

    private val activityViewModel: MainViewModel by activityViewModels()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = ComposeView(inflater.context).apply {

        layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        )

        setContent {
            DeftgramTheme {
                MzinfoContent(
                    uiState = infoUiState,
                    onNavIconPressed = {
                        activityViewModel.openDrawer()
                    }
                )
            }
        }

    }

}