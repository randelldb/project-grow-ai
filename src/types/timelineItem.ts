export type TimelineItem = {
  id: number;
  text: string;
  type: "user_message" | "ai_response" | "photo_observation";
  dateTime: string;
};
