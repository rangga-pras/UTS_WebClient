function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2.getTime() - d1.getTime()) / (1000 * 3600 * 24);
    return diff;
}
module.exports = dateDifference;
