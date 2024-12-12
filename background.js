const affirmations = [
  "I am capable of amazing things.",
  "Embrace the present moment.",
  "I am kind to myself.",
  "I believe in myself.",
  "I am worthy of love and happiness.",
  "I love myself.",
  "I am grateful for my friends.",
  "I can trust my heart to guide me.",
  "I am creating the life of my dreams.",
  "Gratitude is my superpower.",
  "Everyday, I grow at least 1%. I am commited to making the person I am today an improvement of who I was yesterday.",
  "Little by little, day by day, I am closer to achieving my goals.",
  "I show myself love and appreciation by becoming my best self.",
  "No matter how hard it is, I can do it.",
];

//listener that starts the alarm timer
// creates a new affirmation each half hour
chrome.runtime.onInstalled.addListener(() => {
  // Schedule the alarm for every 30 minutes
  chrome.alarms.create("affirmationReminder", {
    periodInMinutes: 30,
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "affirmationReminder") {
    // Get a random affirmation from list
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    // Display the affirmation notification
    chrome.notifications.create(
      "affirmation",
      {
        type: "basic",
        title: "Affirmation",
        message: affirmation,
        iconUrl: "icon.png", // Replace with your icon path
      },
      () => {}
    );
  }

  // Close the notification after 5 seconds
  setTimeout(() => chrome.notifications.clear("affirmation", () => {}), 5000);
});
