/**
 * Tropi Q — Update Content Plan Sheet
 * Paste vào Apps Script (Extensions > Apps Script), rồi bấm Run > updateContentPlan
 */

function updateContentPlan() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Xóa sheet cũ nếu có, tạo lại
  let ws = ss.getSheetByName("Content Plan");
  if (ws) ss.deleteSheet(ws);
  ws = ss.insertSheet("Content Plan");

  // ── Colors ──────────────────────────────────────────────────────
  const OLIVE    = "#607648";
  const CREAM    = "#EEE2D6";
  const GOLD     = "#B56B2C";
  const WHITE    = "#FFFFFF";
  const INK      = "#2C2C2A";
  const SAND     = "#F7F3EE";
  const SAND2    = "#FEF4E8";
  const DONE     = "#C6EFCE";
  const HIGH     = "#FCE4D6";
  const MED      = "#FFF2CC";
  const LOW      = "#EDEDED";

  // ── Title row 1 ─────────────────────────────────────────────────
  ws.getRange("A1:J1").merge()
    .setValue("TROPI Q — SEO Content Plan (15 articles · primary keywords from confirmed list only)")
    .setBackground(OLIVE).setFontColor(CREAM).setFontSize(13).setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  ws.setRowHeight(1, 40);

  // ── Subtitle row 2 ──────────────────────────────────────────────
  ws.getRange("A2:J2").merge()
    .setValue("Primary keyword column = ONLY the 13 confirmed keywords. Same keyword can appear in multiple articles with different angles & secondary keywords.")
    .setBackground(SAND).setFontColor(GOLD).setFontSize(9).setFontStyle("italic")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  ws.setRowHeight(2, 22);

  // ── Header row 3 ────────────────────────────────────────────────
  const headers = ["#","SEO Article Title","Primary Keyword(s)","Volume /mo",
                   "Secondary Keywords","Pillar","Intent","Words","Priority","Status"];
  const widths  = [40, 370, 220, 90, 360, 200, 110, 65, 85, 120];

  ws.getRange(3, 1, 1, headers.length)
    .setValues([headers])
    .setBackground(OLIVE).setFontColor(CREAM).setFontSize(10).setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle").setWrap(true);
  ws.setRowHeight(3, 30);
  headers.forEach((_, i) => ws.setColumnWidth(i + 1, widths[i]));

  // ── Article data ─────────────────────────────────────────────────
  // [id, title, primaryKW, volume, secondaryKWs, pillar, intent, words, priority, status]
  const arts = [
    ["A1","What Is a Head Spa? Everything You Need to Know",
     "headspa",9900,
     "what is a head spa · head spa benefits · head spa vs hair spa · scalp treatment · head spa first time",
     "Head Spa Education","Informational",1600,"Done","✅ Published"],

    ["A2","7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake",
     "headspa",9900,
     "things to do Hanoi · relaxing Hanoi · head spa Hanoi · Hoan Kiem activities · spa near Old Quarter",
     "Hanoi Travel Experience","Informational",2000,"Done","✅ Ready to deploy"],

    ["A3","Best Massage in Hanoi: A Complete Guide for Tourists",
     "massage Hanoi · best massage Hanoi",6400,
     "cheap massage Hanoi · Thai massage Hanoi · professional massage Hanoi · body massage Hanoi · deep tissue Hanoi",
     "Hanoi Spa & Massage","Transactional",2500,"High","🔲 Planned"],

    ["A4","Best Spa in Hanoi: Top Picks for Every Budget and Need",
     "spa in Hanoi · best spa in Hanoi",2780,
     "luxury spa Hanoi · day spa Hanoi · spa near Hoan Kiem · spa for tourists Hanoi · top-rated spa Hanoi",
     "Hanoi Spa & Massage","Transactional",2000,"High","🔲 Planned"],

    ["A5","Head Spa in Hanoi: What It Is, Where to Go, What to Expect",
     "head spa Hanoi · hair spa Hanoi · best head spa Hanoi",1200,
     "Vietnamese head spa · scalp treatment Hanoi · headspa Hanoi · authentic head spa Hanoi · head spa near Hoan Kiem",
     "Head Spa Education","Transactional",1800,"High","🔲 Planned"],

    ["A6","Best Spa and Massage in Hanoi Old Quarter: A Local Guide",
     "massage Hanoi Old Quarter · spa Old Quarter Hanoi",910,
     "massage near Hoan Kiem · relaxing Old Quarter · spa walk Old Quarter · quiet spa Old Quarter",
     "Hanoi Spa & Massage","Transactional",1500,"High","🔲 Planned"],

    ["A7","Nail Salon in Hanoi: What Every Tourist Needs to Know",
     "hanoi nail salon",390,
     "nail art Hanoi · manicure Hanoi · pedicure Hanoi · gel nails Hanoi · nail near Old Quarter",
     "Tropi Q Services","Transactional",1200,"Medium","🔲 Planned"],

    ["A8","Body Massage in Hanoi: Types, Prices, and Best Places",
     "body massage Hanoi",260,
     "full body massage Hanoi · Swedish massage Hanoi · deep tissue Hanoi · relaxing massage Hanoi",
     "Tropi Q Services","Transactional",1500,"Medium","🔲 Planned"],

    ["A9","Facial Treatment in Hanoi: A Guide for Tourists",
     "facial Hanoi",170,
     "skin care Hanoi · hydrating facial Hanoi · anti-aging facial Hanoi · facial near Old Quarter",
     "Tropi Q Services","Transactional",1200,"Medium","🔲 Planned"],

    ["A10","Vietnamese Head Spa vs Regular Massage: Which One Do You Actually Need?",
     "headspa · massage Hanoi",15300,
     "head spa vs massage · difference head spa massage · scalp vs body massage · should I get head spa or massage",
     "Head Spa Education","Informational",1500,"Medium","🔲 Planned"],

    ["A11","Oily Scalp Care: What a Head Spa Does That Nothing Else Can",
     "headspa · head spa Hanoi",10620,
     "oily scalp head spa · scalp sebum treatment · oily hair roots solution · scalp detox · head spa scalp care",
     "Scalp & Skin Care","Informational",1500,"Medium","🔲 Planned"],

    ["A12","Hair Spa in Hanoi: The Full Experience Explained",
     "hair spa Hanoi · headspa",10290,
     "hair spa vs head spa · hair treatment Hanoi · scalp spa Hanoi · Vietnamese hair spa · hair spa benefits",
     "Head Spa Education","Informational",1200,"Medium","🔲 Planned"],

    ["A13","How to Find the Best Spa in Hanoi Without Getting Ripped Off",
     "spa in Hanoi · best spa in Hanoi",2780,
     "safe spa Hanoi · spa price Hanoi · tourist trap spa Hanoi · how to choose spa Hanoi · trustworthy spa Hanoi",
     "Hanoi Spa & Massage","Informational",1500,"Low","🔲 Planned"],

    ["A14","Massage in Hanoi: How Much It Costs and What You Actually Get",
     "massage Hanoi · best massage Hanoi",6400,
     "massage price Hanoi · how much massage Hanoi · cheap vs good massage Hanoi · what to expect massage Hanoi",
     "Hanoi Spa & Massage","Informational",1500,"Low","🔲 Planned"],

    ["A15","Traditional Spa in Hanoi Old Quarter: Beyond the Tourist Trail",
     "spa Old Quarter Hanoi · massage Hanoi Old Quarter",910,
     "hidden spa Old Quarter · authentic spa Hanoi · local spa Hanoi · spa like locals Hanoi · non-tourist spa Hanoi",
     "Hanoi Travel Experience","Informational",1200,"Low","🔲 Planned"],
  ];

  const priBg  = { "Done": DONE, "High": HIGH, "Medium": MED, "Low": LOW };
  const statBg = { "✅ Published": DONE, "✅ Ready to deploy": DONE, "🔲 Planned": WHITE };

  arts.forEach((a, i) => {
    const r = i + 4;
    const rowBg = i % 2 === 0 ? WHITE : SAND;
    ws.setRowHeight(r, 48);

    // Write all 10 columns at once
    ws.getRange(r, 1, 1, 10).setValues([a])
      .setFontFamily("Arial").setFontSize(9).setVerticalAlignment("middle").setWrap(true)
      .setBackground(rowBg).setFontColor(INK);

    // Col A: article ID
    ws.getRange(r, 1).setFontWeight("bold").setFontColor(OLIVE).setHorizontalAlignment("center");

    // Col B: title bold
    ws.getRange(r, 2).setFontWeight("bold");

    // Col C: primary keyword — highlighted
    ws.getRange(r, 3).setBackground(SAND2).setFontColor(GOLD).setFontWeight("bold");

    // Col D: volume center
    ws.getRange(r, 4).setHorizontalAlignment("center").setFontWeight("bold");

    // Col F: pillar
    ws.getRange(r, 6).setFontColor(OLIVE).setFontWeight("bold");

    // Col H: words center
    ws.getRange(r, 8).setHorizontalAlignment("center");

    // Col I: priority — color coded
    ws.getRange(r, 9)
      .setBackground(priBg[a[8]] || WHITE)
      .setFontWeight("bold").setHorizontalAlignment("center");

    // Col J: status — color coded
    ws.getRange(r, 10)
      .setBackground(statBg[a[9]] || WHITE)
      .setHorizontalAlignment("center");
  });

  // ── Borders ──────────────────────────────────────────────────────
  ws.getRange(3, 1, arts.length + 1, 10)
    .setBorder(true, true, true, true, true, true, "#C0C0C0",
               SpreadsheetApp.BorderStyle.SOLID);

  // ── Freeze top 3 rows ────────────────────────────────────────────
  ws.setFrozenRows(3);

  // ── Move sheet to last position ──────────────────────────────────
  ss.moveActiveSheet(ss.getNumSheets());

  SpreadsheetApp.getUi().alert("✅ Content Plan sheet updated successfully!");
}
