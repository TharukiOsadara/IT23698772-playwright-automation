// This helper is for Playwright tests for swifttranslator.com
// It uses robust selectors and waits for output to change, without changing any test case logic.

/**
 * Get output from swifttranslator.com after entering inputText.
 * @param {import('@playwright/test').Page} page
 * @param {string} inputText
 * @returns {Promise<string>} output
 */
export async function getOutput(page, inputText) {
  // Use robust selectors based on codegen or manual inspection
  // Try textarea#singlish for input, textarea#sinhala for output (update if needed)
  const inputField = page.locator('textarea#singlish, textarea.w-full');
  const outputField = page.locator('textarea#sinhala, textarea[readonly], div[role="textbox"], div.w-full');

  // Wait for input to be visible
  await inputField.first().waitFor({ state: 'visible', timeout: 5000 });
  // Clear and fill input
  await inputField.first().fill('');
  await inputField.first().fill(inputText);

  // Wait for output to change and be non-empty (up to 5s)
  let lastValue = '';
  for (let i = 0; i < 20; i++) {
    let value = '';
    try {
      value = await outputField.first().inputValue();
    } catch {
      value = await outputField.first().textContent() || '';
    }
    value = value.trim();
    if (value && value !== lastValue) return value;
    lastValue = value;
    await page.waitForTimeout(250);
  }
  // Fallback: return whatever is there
  try {
    return (await outputField.first().inputValue()).trim();
  } catch {
    return (await outputField.first().textContent() || '').trim();
  }
}
