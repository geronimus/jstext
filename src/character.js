/** Control character constants that are not spaces or UTF-8 formatters. */
const Control = Object.freeze({
  Acknowledge: "\u0006",
  ApplicationProgramCommand: "\u009f",
  Backspace: "\u0008",
  Bell: "\u0007",
  BreakPermittedHere: "\u0082",
  Cancel: "\u0018",
  CancelCharacter: "\u0094",
  CharacterTabulationSet: "\u0088",
  CharacterTabulationWithJustification: "\u0089",
  ControlSequenceIntroducer: "\u009b",
  DataLinkEscape: "\u0010",
  DeleteCharacter: "\u007f",
  DeviceControl1: "\u0011",
  DeviceControl2: "\u0012",
  DeviceControl3: "\u0013",
  DeviceControl4: "\u0014",
  DeviceControlString: "\u0090",
  EndOfMedium: "\u0019",
  EndOfProtectedArea: "\u0097",
  EndOfSelectedArea: "\u0087",
  EndOfText: "\u0003",
  EndOfTransmission: "\u0004",
  EndOfTransmissionBlock: "\u0017",
  Enquiry: "\u0005",
  Escape: "\u001b",
  FileSeparator: "\u001c",
  GroupSeparator: "\u001d",
  HighOctetPreset: "\u0081",
  Index: "\u0084",
  LineTabulationSet: "\u008a",
  MessageWaiting: "\u0095",
  NegativeAcknowledge: "\u0015",
  NextLine: "\u0085",
  NoBreakHere: "\u0083",
  Null: "\u0000",
  OperatingSystemCommand: "\u009d",
  Padding: "\u0080",
  PartialLineBackward: "\u008c",
  PartialLineForward: "\u008b",
  PrivateMessage: "\u009e",
  PrivateUse1: "\u0091",
  PrivateUse2: "\u0092",
  RecordSeparator: "\u001e",
  ReverseLineFeed: "\u008d",
  SetTransmitState: "\u0093",
  ShiftIn: "\u000f",
  ShiftOut: "\u000e",
  SingleCharacterIntroIntroducer: "\u009a",
  SingleGraphicCharacterIntroducer: "\u0099",
  SingleShiftThree: "\u008f",
  SingleShiftTwo: "\u008e",
  StartOfHeading: "\u0001",
  StartOfProtectedArea: "\u0096",
  StartOfSelectedArea: "\u0086",
  StartOfString: "\u0098",
  StartOfText: "\u0002",
  StringTerminator: "\u009c",
  Substitute: "\u001a",
  SynchronousIdle: "\u0016",
  SnitSeparator: "\u001f",
  ZeroWidthJoiner: "\u200c",
  ZeroWidthNonJoiner: "\u200d"
});

/** The Set of all control characters. */
const ControlSet = new Set( Object.values( Control ) );

/** Line ending character constants. */
const LineEnd = Object.freeze({
  CarriageReturn: "\u000d",
  LineFeed: "\u000a",
  LineSeparator: "\u2028",
  ParagraphSeparator: "\u2029"
});

/** The Set of all line ending characters. */
const LineEndSet = new Set( Object.values( LineEnd ) );

/** Space character constants. */
const Space = Object.freeze({
  CharacterTabulation: "\u0009",
  FormFeed: "\u000c",
  LineTabulation: "\u000b",
  NoBreakSpace: "\u00a0",
  Space: "\u0020",
  ZeroWidthNoBreakSpace: "\ufeff"
});

/** The Set of all space characters. */
const SpaceSet = new Set( Object.values( Space ) );

export {
  Control,
  ControlSet,
  LineEnd,
  LineEndSet,
  Space,
  SpaceSet
};

