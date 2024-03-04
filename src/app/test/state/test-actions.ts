export class CreateColor {
  public static type: string = '[TestState] Create color';

  constructor(public readonly color: string) {}
}
