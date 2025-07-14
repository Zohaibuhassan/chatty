export function formatMessageTime(date) {
    if (!date) return "Unknown time";
  
    const parsedDate = new Date(date);
  
    if (isNaN(parsedDate.getTime())) {
      return "Invalid date";
    }
  
    return parsedDate.toLocaleTimeString("en-PK", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  