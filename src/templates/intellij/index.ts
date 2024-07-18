import { ThemeGenerator } from "../../types";
import path from "path";
import fs from "fs/promises";
import { Colors } from "../../colors";
import { ensureDir } from "../../util/filesystem";

export const generate: ThemeGenerator = async ({
  colors,
  baseOutputDirectory,
}) => {
  const outputDirectory = path.join(baseOutputDirectory, "intellij");

  const templateDirectory = path.join(__dirname, "./template");

  await fs.cp(templateDirectory, outputDirectory, { recursive: true });

  await ensureDir(path.join(outputDirectory, "./theme"));

  await fs.writeFile(
    path.join(outputDirectory, "./theme/concrete.theme.json"),
    JSON.stringify(createTheme(colors), null, 2)
  );
};

function createTheme(colors: Colors) {
  const workbenchForeground = colors.neutral[840];
  const editorForeground = colors.neutral[840];

  return {
    name: "Concrete",
    author: "Ben Bachem",
    dark: true,
    editorScheme: "/resources/concrete.theme.xml",
    ui: {
      "*": {
        background: colors.neutral[150],
        foreground: colors.neutral[840],
        infoForeground: colors.neutral[620],
        errorForeground: colors.semantic.error,
        selectionBackground: {
          "os.default": colors.background.selection,
          "os.windows": colors.background.selection,
          "os.mac": colors.background.selection,
        },
        selectionForeground: {
          "os.default": "selectionForeground",
          "os.windows": "selectionForeground",
          "os.mac": "selectionForeground",
        },
        selectionInactiveBackground: colors.background.inactiveSelection,
        selectionBackgroundInactive: colors.background.inactiveSelection,
        disabledBackground: "backgroundColor",
        inactiveBackground: "backgroundColor",
        acceleratorForeground: "#E6E6E6",
        acceleratorSelectionForeground: "#E6E6E6",

        borderColor: "#333841",
        disabledBorderColor: "#2d3137",
        focusColor: "backgroundColor",
        focusedBorderColor: "accentColor",
        separatorColor: "#32363c",
      },
      ActionButton: {
        hoverBackground: "#3d424b",
        hoverBorderColor: "#3d424b",
        pressedBackground: "#3f444d",
        pressedBorderColor: "#3f444d",
      },
      "BookmarkIcon.background": "#d9a343",
      BookmarkMnemonicAssigned: {
        foreground: "#ffffff",
        background: "#4d78cc",
        borderColor: "#4d78cc",
      },
      BookmarkMnemonicAvailable: {
        borderColor: "borderColor",
        foreground: "#a0a7b4",
        background: "#3d424b",
      },
      BookmarkMnemonicCurrent: {
        borderColor: "accentColor",
        foreground: "#a0a7b4",
        background: "#323844",
      },
      BookmarkMnemonicIcon: {
        foreground: "#a0a7b4",
        background: "#3d424b",
        borderColor: "accentColor",
      },
      Button: {
        foreground: "#a0a7b4",
        startBackground: "#3d424b",
        endBackground: "#3d424b",
        startBorderColor: "#464c55",
        endBorderColor: "#464c55",
        shadowColor: "backgroundColor",
        focusedBorderColor: "#646a73",
        default: {
          foreground: "#ffffff",
          startBackground: "accentColor",
          endBackground: "accentColor",
          startBorderColor: "accentColor",
          endBorderColor: "accentColor",
          focusedBorderColor: "#4269b9",
          focusColor: "#4269b9",
        },
      },
      Borders: {
        color: "#333841",
        ContrastBorderColor: "#333841",
      },
      ComboBox: {
        nonEditableBackground: "#333841",
        background: "#333841",
        selectionBackground: "#4d78cc",
        ArrowButton: {
          iconColor: "#abb2bf",
          disabledIconColor: "#2c313a",
          nonEditableBackground: "#333841",
        },
      },
      "ComboPopup.border": "1,1,1,1,2d3137",
      CompletionPopup: {
        background: "#3d424b",
        selectionBackground: "#2c313a",
        matchForeground: "accentColor",
      },
      ComplexPopup: {
        Header: {
          background: "backgroundColor",
        },
      },
      Component: {
        errorFocusColor: "#802d43",
        inactiveErrorFocusColor: "#522530",
        warningFocusColor: "#8c812b",
        inactiveWarningFocusColor: "#47441f",
      },
      Counter: {
        background: "#3d424b",
        foreground: "#abb2bf",
      },
      DefaultTabs: {
        underlineColor: "accentColor",
        inactiveUnderlineColor: "#4269b9",
        hoverBackground: "#323844",
      },
      DragAndDrop: {
        areaForeground: "#abb2bf",
        areaBackground: "#323844",
        areaBorderColor: "#333841",
      },
      Editor: {
        background: "#282c34",
        foreground: "#abb2bf",
        SearchField: {
          background: "#282c34",
        },
        shortcutForeground: "accentColor",
        ToolTip: {
          background: "#323844",
        },
      },
      "EditorPane.inactiveBackground": "#282c34",
      EditorTabs: {
        underlinedTabBackground: "#3d424b",
      },
      FileColor: {
        Yellow: "#3d3026",
        Green: "#293a24",
        Blue: "#24354f",
        Violet: "#2d1942",
        Orange: "#3d3026",
        Rose: "#3d1e2b",
      },
      GotItTooltip: {
        foreground: "#abb2bf",
        background: "#3d424b",
        borderColor: "#53565f",
        linkForeground: "#6494ed",
        shortcutForeground: "infoForeground",
      },
      Label: {
        infoForeground: "infoForeground",
        successForeground: "#89ca78",
      },
      Lesson: {
        "Tooltip.background": "#3d424b",
        "Tooltip.spanBackground": "accentColor",
        "Tooltip.foreground": "#ffffff",
      },
      Link: {
        activeForeground: "#6494ed",
        hoverForeground: "#6494ed",
        pressedForeground: "#6494ed",
        visitedForeground: "#6494ed",
      },
      List: {
        selectionBackground: "#4d78cc",
        selectionForeground: "#ffffff",
      },
      MainToolbar: {
        inactiveBackground: "#282c34",
        background: "backgroundColor",
        Dropdown: {
          hoverBackground: "#3d424b",
        },
      },
      MemoryIndicator: {
        allocatedBackground: "#304676",
        usedBackground: "#3a5a9c",
      },
      Notification: {
        background: "notificationBackground",
        borderColor: "#53565f",
        errorForeground: "#abb2bf",
        errorBackground: "#4d232e",
        errorBorderColor: "#692746",
        MoreButton: {
          background: "#2f343c",
          innerBorderColor: "#53565f",
        },
        ToolWindow: {
          informativeForeground: "#abb2bf",
          informativeBackground: "#2e4280",
          informativeBorderColor: "#252555",
          warningForeground: "#abb2bf",
          warningBackground: "#735822",
          warningBorderColor: "#5f4422",
          errorForeground: "#abb2bf",
          errorBackground: "#802d43",
          errorBorderColor: "#552029",
        },
      },
      "NotificationsToolwindow.newNotification.background":
        "notificationBackground",
      "NotificationsToolwindow.newNotification.hoverBackground": "#3d424b",
      "NotificationsToolwindow.Notification.hoverBackground": "#3d424b",
      "Panel.background": "backgroundColor",
      ParameterInfo: {
        background: "#3d424b",
        foreground: "#abb2bf",
        infoForeground: "#5c6370",
        currentParameterForeground: "#ffffff",
      },
      Plugins: {
        background: "backgroundColor",
        disabledForeground: "#5c6370",
        hoverBackground: "#323844",
        lightSelectionBackground: "#323844",
        tagBackground: "#414855",
        tagForeground: "#abb2bf",
        Button: {
          installForeground: "accentColor",
          installBorderColor: "accentColor",
          installFillForeground: "#ffffff",
          installFillBackground: "accentColor",
          updateForeground: "#ffffff",
          updateBackground: "accentColor",
          updateBorderColor: "accentColor",
        },
        SearchField: {
          background: "#282c34",
          borderColor: "#1b1d21",
        },
        "SectionHeader.background": "#414855",
        Tab: {
          selectedForeground: "#abb2bf",
          selectedBackground: "#323844",
          hoverBackground: "#323844",
        },
      },
      Popup: {
        background: "#282c34",
        paintBorder: false,
        borderColor: "#21252b",
        "Toolbar.borderColor": "#3d424b",
        "Header.activeBackground": "#414855",
        "Header.inactiveBackground": "#2c313a",
        Advertiser: {
          foreground: "#5c6370",
          borderColor: "#2d3137",
        },
      },
      ProgressBar: {
        trackColor: "#1D1D26",
        progressColor: "accentColor",
        indeterminateStartColor: "#313469",
        indeterminateEndColor: "accentColor",
        failedColor: colors.background.deleted,
        failedEndColor: colors.gutter.deleted,
        passedColor: colors.background.added,
        passedEndColor: colors.gutter.added,
      },
      RunWidget: {
        foreground: "#eef3ff",
        separatorColor: "#eef3ff",
        background: "accentColor",
      },
      SearchEverywhere: {
        "Advertiser.foreground": "#5c6370",
        "Header.background": "backgroundColor",
        SearchField: {
          background: "#282c34",
          borderColor: "#1b1d21",
        },
        Tab: {
          selectedForeground: "#abb2bf",
          selectedBackground: "#323844",
        },
      },
      SearchMatch: {
        startBackground: "accentColor",
        endBackground: "accentColor",
      },
      "SidePanel.background": "backgroundColor",
      SpeedSearch: {
        foreground: "#abb2bf",
        borderColor: "#3d424b",
        background: "#3d424b",
        errorForeground: "#e06c75",
      },
      "Settings.Spotlight.borderColor": "accentColor",
      "StatusBar.background": "baseBackground",
      TabbedPane: {
        underlineColor: "accentColor",
        contentAreaColor: "#323844",
        hoverColor: "#323844",
      },
      Table: {
        background: "#282c34",
        stripeColor: "#2c313a",
        selectionForeground: "#ffffff",
        foreground: "#abb2bf",
        dropLineColor: "#abb2bf",
        focusCellForeground: "#abb2bf",
        gridColor: "#5c6370",
        lightSelectionInactiveForeground: "#abb2bf",
        lightSelectionForeground: "#abb2bf",
        selectionBackground: "#3d424b",
        selectionInactiveForeground: "#abb2bf",
        lightSelectionBackground: "#414855",
        lightSelectionInactiveBackground: "#323844",
      },
      "Tag.background": "#3d424b",
      TextArea: {
        background: "#282c34",
        selectionBackground: "#414855",
      },
      TextField: {
        background: "#282c34",
        selectionBackground: "#414855",
      },
      ToggleButton: {
        onForeground: "#ffffff",
        onBackground: "accentColor",
        offForeground: "#9f9fa6",
        offBackground: "#3d424b",
        borderColor: "#3d424b",
        buttonColor: "#5c6370",
      },
      ToolTip: {
        background: "#3d424b",
      },
      ToolWindow: {
        background: "backgroundColor",
        Button: {
          hoverBackground: "#323844",
          selectedBackground: "#3d424b",
          selectedForeground: "#abb2bf",
        },
        Header: {
          background: "#414855",
          inactiveBackground: "#323844",
        },
        HeaderTab: {
          hoverBackground: "#323844",
          hoverInactiveBackground: "#3d424b",
          selectedBackground: "#323844",
          selectedInactiveBackground: "#3d424b",
        },
      },
      TitlePane: {
        infoForeground: "infoForeground",
        inactiveInfoForeground: "#5C6370",
      },
      Tree: {
        selectionBackground: "#4d78cc",
        modifiedItemForeground: "accentColor",
        selectionInactiveForeground: "foregroundColor",
        rowHeight: 20,
      },
      ValidationTooltip: {
        errorBackground: "#802d43",
        errorBorderColor: "#802d43",
        warningBackground: "#735822",
        warningBorderColor: "#5f4422",
      },
      VersionControl: {
        "Log.Commit": {
          currentBranchBackground: "#282c35",
          hoveredBackground: "#2c313c",
          unmatchedForeground: "#5c6370",
        },
        RefLabel: {
          backgroundBrightness: 0.3,
          backgroundBase: "#5c6370",
          foreground: "#abb2bf",
        },
      },
      WelcomeScreen: {
        borderColor: "borderColor",
        Projects: {
          "actions.background": "#323844",
          selectionInactiveBackground: "#2c313a",
        },
        separatorColor: "#2c313a",
        "SidePanel.background": "#282c34",
        "Details.background": "backgroundColor",
      },
    },
    icons: {
      ColorPalette: {
        "Checkbox.Background.Default.Dark": "#282c34",
        "Checkbox.Border.Default.Dark": "#414855",
        "Checkbox.Foreground.Selected.Dark": "#abb2bf",
        "Checkbox.Focus.Wide.Dark": "#568AF2",
        "Checkbox.Focus.Thin.Default.Dark": "#568AF2",
        "Checkbox.Focus.Thin.Selected.Dark": "#568AF2",
        "Checkbox.Background.Disabled.Dark": "#21252b",
        "Checkbox.Border.Disabled.Dark": "#2c313a",
        "Checkbox.Foreground.Disabled.Dark": "#5c6370",
      },
    },
  };
}
