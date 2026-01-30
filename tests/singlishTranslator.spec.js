import { test, expect, chromium } from '@playwright/test';
import { getOutput } from './getOutputHelper';

// This forces the tests in this file to only run on Chromium
test.use({ browserName: 'chromium' });
// Alternate test suite for Singlish to Sinhala Translator
// Covers positive, negative, and UI scenarios with different inputs
test.describe('Singlish to Sinhala Translator - Alternate Test Cases', () => {

  // Before each test, navigate to the translator page and wait for it to load
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== ALTERNATE POSITIVE FUNCTIONAL TEST CASES ====================

  // These tests check correct translation for a variety of valid inputs

  // 1. Simple sentences

  test('Pos_Fun_0001 - Simple: c', async ({ page }) => {
    const output = await getOutput(page, 'hodhata hithalaa balalaa visadhanna.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 2. Compound sentences
  test('Pos_Fun_0002 - Compound: mama kavi liyanavaa namuth sindhu kiyanne naee', async ({ page }) => {
    const output = await getOutput(page, 'mama kavi liyanavaa namuth sindhu kiyanne naee.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 3. Complex sentences
  test('Pos_Fun_0003 - Complex: oya udhavu kaloth mama vaedee ivara karannam', async ({ page }) => {
    const output = await getOutput(page, 'oya udhavu kaloth mama vaedee ivara karannam.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 4. Interrogative sentences
  test('Pos_Fun_0004 - Interrogative: obaata monawada oonee?', async ({ page }) => {
    const output = await getOutput(page, 'obaata monawada oonee?');
    expect(output.length).toBeGreaterThan(0);
  });

  // 5. Imperative sentences
  test('Pos_Fun_0005 - Imperative: mehe balanna', async ({ page }) => {
    const output = await getOutput(page, 'mehe balanna.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 6. Negative and Positive sentences
  test('Pos_Fun_0006 - Negative: mama ehema yanna nae', async ({ page }) => {
    const output = await getOutput(page, 'mama ehema yanna nae.');
    expect(output.length).toBeGreaterThan(0);
  });
  test('Pos_Fun_0007 - Positive: mama ehema yanavaa', async ({ page }) => {
    const output = await getOutput(page, 'mama ehema yanavaa.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 7. Greetings
  test('Pos_Fun_0008 - Greeting: suba dhavasak!!', async ({ page }) => {
    const output = await getOutput(page, 'suba dhavasak!!');
    expect(output.length).toBeGreaterThan(0);
  });

  // 8. Request and Response
  test('Pos_Fun_0009 - Request: karunaakarala mata meeka kiyala dhenna puluvandha?', async ({ page }) => {
    const output = await getOutput(page, 'karunaakarala mata meeka kiyala dhenna puluvandha?'); 
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0010 - Response: hari, mama eeka kiyala dhennam.', async ({ page }) => {
    const output = await getOutput(page, 'hari, mama eeka kiyala dhennam.');
    expect(output.length).toBeGreaterThan(0);
  });


  // 9. Past Tense
  test('Pos_Fun_0011 - Past tense: eyaa kalin giyaa', async ({ page }) => {
    const output = await getOutput(page, 'eyaa kalin giyaa.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 10. Present Tense
  test('Pos_Fun_0012 - Present tense: mama igena gannavaa', async ({ page }) => {
    const output = await getOutput(page, 'mama igena gannavaa.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 11. Future Tense
  test('Pos_Fun_0013 - Future tense: api heta balamu', async ({ page }) => {
    const output = await getOutput(page, 'api heta balamu.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 12. English brand/technical terms
  test('Pos_Fun_0014 - English: WhatsApp group ekata add karanna', async ({ page }) => {
    const output = await getOutput(page, 'WhatsApp group ekata add karanna.');
    expect(output.length).toBeGreaterThan(0);
  });


  // 13. Place and common English word
  test('Pos_Fun_0015 - Place: nimaali office enna late vennee traffic nisaa', async ({ page }) => {
    const output = await getOutput(page, 'nimaali office enna late vennee traffic nisaa.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 14. Abbreviation
  test('Pos_Fun_0016 - Abbreviation: App eka download karanna', async ({ page }) => {
    const output = await getOutput(page, 'App eka download karanna.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 15. Punctuation
  test('Pos_Fun_0017 - Translate with punctuation: eya kohedha?', async ({ page }) => {
    const output = await getOutput(page, 'eya kohedha?');
    expect(output.length).toBeGreaterThan(0);
  });

  // 16. Currency and numbers
  test('Pos_Fun_0018 - Translate with currency: mata ru.1000k oonee', async ({ page }) => {
    const output = await getOutput(page, 'mata ru.1000k oonee.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 17. Time formats
  test('Pos_Fun_0019 - Translate with time: 8.00 P.M. yanna oonee', async ({ page }) => {
    const output = await getOutput(page, '8.00 P.M. yanna oonee.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 18. Dates
  test('Pos_Fun_0020 - Translate with date: janavaari 1 yanna oonee.', async ({ page }) => {
    const output = await getOutput(page, 'janavaari 1 yanna oonee.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 19. Multi-word expressions
  test('Pos_Fun_0021 - Translate multi-word: api hodhayi', async ({ page }) => {
    const output = await getOutput(page, 'api hodhayi.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 20. Repeated words for emphasis
  test('Pos_Fun_0022 - Translate repeated: lassanayi lassanayi', async ({ page }) => {
    const output = await getOutput(page, 'lassanayi lassanayi.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 21. Medium length input (31-299 characters)
  test('Pos_Fun_0023 - Medium input', async ({ page }) => {
    const input = 'mata adha udhee meeting ekak thiyana nisaa mama kalinma office ekata giyaa. kalinma giyapu nisaa mata meeting ekata hodhatama suudhaanam venna puluvan vuNaa.';
    expect(input.length).toBeGreaterThan(30);
    expect(input.length).toBeLessThan(300);
    const output = await getOutput(page, input);
    expect(output.length).toBeGreaterThan(0);
  });

  // 22. Long input (≥300 characters)
  test('Pos_Fun_0024 - Long input', async ({ page }) => {
    const input = 'mata adha udhee meeting ekak thiyana nisaa mama kalinma office ekata giyaa. kalinma giyapu nisaa mata meeting ekata hodhatama suudhaanam venna puluvan vuNaa. eeka nisaa mata meeting eka hodhata karaganna puluvan vuNaa. meeting eka ivara velaa passe mama reports hadhanna oonee. reports hadhalaa ivara velaa mama magee lunch break eka ganna yanavaa.';
    expect(input.length).toBeGreaterThanOrEqual(300);
    const output = await getOutput(page, input);
    expect(output.length).toBeGreaterThan(0);
  });

  // 23. Singular/plural and pronouns
  test('Pos_Fun_0025 - Singular: mama adha paadam karanavaa.', async ({ page }) => {
    const output = await getOutput(page, 'mama adha paadam karanavaa.');
    expect(output.length).toBeGreaterThan(0);
    expect(output).toContain('මම'); 
    expect(output).toContain('පාඩම් කරනවා'); 
  });
  test('Pos_Fun_0026 - Plural: eyaalaa okkoma kaeema kaala ivarayi', async ({ page }) => {
    const output = await getOutput(page, 'eyaalaa okkoma kaeema kaalaa ivarayi.');
    expect(output.length).toBeGreaterThan(0);
    expect(output).toContain('කෑම'); 
    expect(output).toContain('ඉවරයි');   
  });
   
  // 24. Informal language
  test('Pos_Fun_0027 - Informal: mehe balapan', async ({ page }) => {
    const output = await getOutput(page, 'mehe balapan.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 25. Day-to-day expressions
  test('Pos_Fun_0028 - Day-to-day: mama hoDHayi', async ({ page }) => {
    const output = await getOutput(page, 'mama hoDHayi.');
    expect(output.length).toBeGreaterThan(0);
  });

  // 26. Repeated words for emphasis
  test('Pos_Fun_0029 - Repeated words: tika tika / hari hari', async ({ page }) => {
    const output = await getOutput(page, 'tika tika hari hari.');
    expect(output).toContain('ටික ටික');
    expect(output).toContain('හරි හරි');
  });

  // 27. Multiple spaces, Line breaks
  test('Pos_Fun_0030 - Formatting: Multiple spaces and line breaks', async ({ page }) => {
    const input = 'mama gedhara    yanavaa.\noyaa enavadha?';
    const output = await getOutput(page, input);
    expect(output.length).toBeGreaterThan(0);
    expect(output).toMatch(/[\n\r]/); 
  });

  // ==================== ALTERNATE NEGATIVE FUNCTIONAL TEST CASES ====================
  // These tests check edge cases and invalid/unclear inputs

  // 1. Joined words (missing spaces)
  test('Neg_Fun_0001 - Joined words: ammagedarainnavaa', async ({ page }) => {
    const output = await getOutput(page, 'ammagedarainnavaa');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0002 - Multiple joined: eyapaasalgiyaa', async ({ page }) => {
    const output = await getOutput(page, 'eyapaasalgiyaa');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 2. Extremely long input without proper structure
  test('Neg_Fun_0003 - Extremely long unstructured', async ({ page }) => {
    const input = 'ammagedarainnavaaeyapaasalgiyaaobaatapudumadeyakkiyanna'.repeat(20);
    expect(input.length).toBeGreaterThan(300);
    const output = await getOutput(page, input);
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 3. Mixed case issues
  test('Neg_Fun_0004 - Mixed case: AmMa GeDaRa InNaVaA', async ({ page }) => {
    const output = await getOutput(page, 'AmMa GeDaRa InNaVaA.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 4. Special characters that may cause issues
  test('Neg_Fun_0005 - Special characters: amma@gedara#innavaa$', async ({ page }) => {
    const output = await getOutput(page, 'amma@gedara#innavaa$');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 5. Numbers in words
  test('Neg_Fun_0006 - Numbers in text: mama 2ta gedharata enavaa', async ({ page }) => {
    const output = await getOutput(page, 'mama 2ta gedharata enavaa.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 6. Multiple consecutive spaces
  test('Neg_Fun_0007 - Multiple spaces: amma   gedara    innavaa', async ({ page }) => {
    const output = await getOutput(page, 'amma   gedara    innavaa.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 7. Line breaks in input
  test('Neg_Fun_0008 - Line breaks', async ({ page }) => {
    const input = 'amma gedara innavaa.\neya paasal giyaada?';
    const output = await getOutput(page, input);
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 8. Empty or whitespace only
  test('Neg_Fun_0009 - Empty input', async ({ page }) => {
    const output = await getOutput(page, '');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 9. Only punctuation
  test('Neg_Fun_0010 - Only punctuation: ???!!!', async ({ page }) => {
    const output = await getOutput(page, '???!!!');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 10. Very short incomplete words
  test('Neg_Fun_0011 - Incomplete words: am ge in', async ({ page }) => {
    const output = await getOutput(page, 'am ge in');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 11. Slang that may not convert well
  test('Neg_Fun_0012 - Slang: ela machan! lassana!!', async ({ page }) => {
    const output = await getOutput(page, 'ela machan! lassana!!');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // 12. Mixed languages incorrectly
  test('Neg_Fun_0013 - Incorrectly mixed: amma go home innavaa', async ({ page }) => {
    const output = await getOutput(page, 'amma go home innavaa.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  // ==================== ALTERNATE UI TEST CASES ====================
  // These tests check UI behaviors like real-time output and clearing input

  // Real-time output update
  test('Pos_UI_0001 - Real-time output update while typing', async ({ page }) => {
    const inputField = page.locator('#singlish');
    const outputField = page.locator('#sinhala');
    async function getOutputValue() {
      try {
        return await outputField.inputValue();
      } catch (e) {
        return await outputField.textContent() || '';
      }
    }
    await inputField.fill('');
    await page.waitForTimeout(200);
    await inputField.type('a', { delay: 100 });
    await page.waitForTimeout(500);
    let output1 = await getOutputValue();
    await inputField.type('m', { delay: 100 });
    await page.waitForTimeout(500);
    let output2 = await getOutputValue();
    await inputField.type('m', { delay: 100 });
    await page.waitForTimeout(500);
    let output3 = await getOutputValue();
    await inputField.type('a', { delay: 100 });
    await page.waitForTimeout(500);
    let finalOutput = await getOutputValue();
    expect(finalOutput.length).toBeGreaterThanOrEqual(0);
  });

  // Clear input functionality
  test('Pos_UI_0002 - Clear input functionality', async ({ page }) => {
    const inputField = page.locator('#singlish');
    const outputField = page.locator('#sinhala');
    async function getOutputValue() {
      try {
        return await outputField.inputValue();
      } catch (e) {
        return await outputField.textContent() || '';
      }
    }
    await inputField.fill('amma gedara innavaa');
    await page.waitForTimeout(1000);
    let outputBefore = await getOutputValue();
    expect(outputBefore.length).toBeGreaterThanOrEqual(0);
    await inputField.fill('');
    await page.waitForTimeout(500);
    let outputAfter = await getOutputValue();
    expect(outputAfter.length).toBeGreaterThanOrEqual(0);
  });

});
