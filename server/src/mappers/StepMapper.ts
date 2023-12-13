import Step from '@/models/Step';

export default class StepMapper {
  /**
   * Map normal object to single Step object
   * @param {any} obj
   * @returns {Step} Step object
   */
  public static mapObjectToStep(obj: any): Step {
    return new Step(obj.stepNumber, obj.stepContent);
  }

  /**
   * Map data to step array
   * @param {string} data encoded steps data
   * @returns {Step[]} Step array
   */
  public static mapToSteps(data: string): Step[] {
    const steps: Step[] = [];
    this.decodeSteps(data).forEach((el, index) => {
      steps.push(this.mapObjectToStep({ stepNumber: index, stepContent: el }));
    });

    return steps;
  }

  /**
   * Return array of steps
   * @param {string} dataToEncode string data to encode
   * @returns {string[]} array of steps
   */
  private static decodeSteps(dataToEncode: string): string[] {
    return dataToEncode.split('|');
  }
};
