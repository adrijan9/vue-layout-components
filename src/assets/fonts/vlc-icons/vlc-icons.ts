export type VlcIconsId =
  | "checked"
  | "close"
  | "exclamation"
  | "warning";

export type VlcIconsKey =
  | "Checked"
  | "Close"
  | "Exclamation"
  | "Warning";

export enum VlcIcons {
  Checked = "checked",
  Close = "close",
  Exclamation = "exclamation",
  Warning = "warning",
}

export const VLC_ICONS_CODEPOINTS: { [key in VlcIcons]: string } = {
  [VlcIcons.Checked]: "61697",
  [VlcIcons.Close]: "61698",
  [VlcIcons.Exclamation]: "61699",
  [VlcIcons.Warning]: "61700",
};
