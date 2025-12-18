export class DateConverter {
    static convertToDate(dateString) {
        const parts = dateString.split("/").map((value) => parseInt(value));
        const [day, month, year] = parts;
        if (!day || !month || !year) {
            throw new Error(`Date invalide: ${dateString}.`);
        }
        return new Date(year, month - 1, day);
    }
}
//# sourceMappingURL=utils.js.map