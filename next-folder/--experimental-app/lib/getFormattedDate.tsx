export default function getFormattedDate(dateString: string): string | null {
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
    } catch {
        return null; // Return null if an error occurs
    }
}
