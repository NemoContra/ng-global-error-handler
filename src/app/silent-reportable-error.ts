export class SilentReportableError extends Error {
  constructor(message: string, sendToServer: boolean) {
    super(message);
  }
}
