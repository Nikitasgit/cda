export class DateConverter {
  static convertToDate(dateString: string): Date {
    const parts = dateString.split("/").map((value): number => parseInt(value));
    const [day, month, year] = parts;
    if (!day || !month || !year) {
      throw new Error(`Date invalide: ${dateString}.`);
    }
    return new Date(year, month - 1, day);
  }
}
