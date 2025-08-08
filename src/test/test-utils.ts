import { expect } from "storybook/test";

export function assertInterFontForAllText(container: HTMLElement) {
  const allElements = container.querySelectorAll<HTMLElement>("*");

  allElements.forEach((el) => {
    const text = el.textContent?.trim();
    const isVisible = !!(
      el.offsetWidth ||
      el.offsetHeight ||
      el.getClientRects().length
    );

    // Check only elements with visible, non-empty text
    if (text && isVisible) {
      const computedFont = window.getComputedStyle(el).fontFamily.toLowerCase();

      expect(
        computedFont.includes("inter"),
        `${text} should have font Inter`,
      ).toBeTruthy(); // Or add custom error: `Expected "${text}" to use Inter`
    }
  });
}

export async function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, ms),
  );
}
