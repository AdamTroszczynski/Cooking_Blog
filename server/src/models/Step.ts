export default class Step {
  stepNumber: number;
  stepContent: string;

  constructor(stepNumber: number, stepContent: string) {
    this.stepNumber = stepNumber;
    this.stepContent = stepContent;
  }
}
