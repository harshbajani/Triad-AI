import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Image prompt is required" }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 photo",
  },
  {
    value: "2",
    label: "2 photos",
  },
  {
    value: "3",
    label: "3 photos",
  },
  {
    value: "4",
    label: "4 photos",
  },
  {
    value: "5",
    label: "5 photos",
  },
];
export const resolutionOptions = [
  {
    value: "256x256",
    label: "256 x 256 pixels (small)",
  },
  {
    value: "512x512",
    label: "512 x 512 pixels (medium-sized)",
  },
  {
    value: "1024x124",
    label: "1024 x 1024 pixels (large)",
  },
];
