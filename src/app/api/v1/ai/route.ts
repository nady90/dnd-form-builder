import { getRandomIdString } from "@/lib/utils";
import { sleep } from "@/test/test-utils";

export async function POST() {
  await sleep(2000);

  return Response.json({
    data: [
      {
        id: getRandomIdString(),
        type: "TextField",
        isAiGenerated: true,
        attributes: {
          label: "LABEL FROM AI TEST 1",
          required: true,
          placeholder: "PLACEHOLDER BY AI",
          helperText: "THIS IS AI GENERATED",
          defaultValue: "default value by AI",
          styles: {
            width: "full",
            alignment: "left",
          },
        },
      },

      {
        id: getRandomIdString(),
        type: "TextField",
        isAiGenerated: true,
        attributes: {
          label: "LABEL FROM AI TEST 2",
          required: true,
          placeholder: "PLACEHOLDER BY AI",
          helperText: "THIS IS AI GENERATED",
          defaultValue: "default value by AI",
          styles: {
            width: "full",
            alignment: "left",
          },
        },
      },

      {
        id: getRandomIdString(),
        type: "TextField",
        isAiGenerated: true,
        attributes: {
          label: "LABEL FROM AI TEST 3",
          required: true,
          placeholder: "PLACEHOLDER BY AI",
          helperText: "THIS IS AI GENERATED",
          defaultValue: "default value by AI",
          styles: {
            width: "full",
            alignment: "left",
          },
        },
      },
    ],
  });
}
