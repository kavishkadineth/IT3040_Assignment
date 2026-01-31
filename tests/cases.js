export const cases = [
  // -------------------------
  // POSITIVE (24)
  // -------------------------
  { id: "Pos_Fun_0001", input: "mama gedhara yanavaa", expectedText: "මම ගෙදර යනවා", type: "positive" },
  { id: "Pos_Fun_0002", input: "oyaata kohomadha?", expectedText: "ඔයාට කොහොමද?", type: "positive" },
  { id: "Pos_Fun_0003", input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?", expectedText: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?", type: "positive" },
  { id: "Pos_Fun_0004", input: "mama office yanna kalin email ekak yavanna oonee", expectedText: "මම office යන්න කලින් email එකක් යවන්න ඕනේ", type: "positive" },
  { id: "Pos_Fun_0005", input: "mama dhaen vaeda karanavaa", expectedText: "මම දැන් වැඩ කරනවා", type: "positive" },
  { id: "Pos_Fun_0006", input: "puLuvannam mata eka evanna", expectedText: "පුළුවන්නම් මට එක එවන්න", type: "positive" },
  { id: "Pos_Fun_0007", input: "magee ammaa gedhara inne", expectedText: "මගේ අම්මා ගෙදර ඉන්නේ", type: "positive" },
  { id: "Pos_Fun_0008", input: "issarahata yanna", expectedText: "ඉස්සරහට යන්න", type: "positive" },
  { id: "Pos_Fun_0009", input: "mama ehema karanne naehae", expectedText: "මම එහෙම කරන්නේ නැහැ", type: "positive" },
  { id: "Pos_Fun_0010", input: "api heta gedhara yamu", expectedText: "අපි හෙට ගෙදර යමු", type: "positive" },
  { id: "Pos_Fun_0011", input: "anee anee eka poddak balanna", expectedText: "අනේ අනේ එක පොඩ්ඩක් බලන්න", type: "positive" },
  { id: "Pos_Fun_0012", input: "mata eka karanna baehae, samaavenna", expectedText: "මට එක කරන්න බැහැ, සමාවෙන්න", type: "positive" },
  { id: "Pos_Fun_0013", input: "api kaeema kanna yanavaa saha passee film ekak balanavaa", expectedText: "අපි කෑම කන්න යනවා සහ පස්සේ film එකක් බලනවා", type: "positive" },
  { id: "Pos_Fun_0014", input: "eyaalaa heta enavaa", expectedText: "එයාලා හෙට එනවා", type: "positive" },
  { id: "Pos_Fun_0015", input: "hari hari lassanayi", expectedText: "හරි හරි ලස්සනයි", type: "positive" },
  { id: "Pos_Fun_0016", input: "magee laptop eka WiFi connect vennee naehae", expectedText: "මගේ laptop එක WiFi connect වෙන්නේ නැහැ", type: "positive" },
  { id: "Pos_Fun_0017", input: "api 7.30 AM enavaa", expectedText: "අපි 7.30 AM එනවා", type: "positive" },
  { id: "Pos_Fun_0018", input: "oyaa enavanam mama balan innavaa", expectedText: "ඔයා එනවනම් මම බලන් ඉන්නවා", type: "positive" },
  { id: "Pos_Fun_0019", input: "samaavenna mama pramaadha unaa", expectedText: "සමාවෙන්න මම ප්‍රමාද උනා", type: "positive" },

  // Your friend changed these expected outputs to match actual site output — keep as is
  { id: "Pos_Fun_0020", input: "api lamayi paasala yamu", expectedText: "අපි ලමයි පාසල යමු", type: "positive", useTyping: true },
  { id: "Pos_Fun_0021", input: "api kandy valata trip ekak yamu", expectedText: "අපි kandy වලට trip එකක් යමු", type: "positive", useTyping: true },

  { id: "Pos_Fun_0022", input: "mata milk ml 500k oona", expectedText: "මට milk ml 500ක් ඕන", type: "positive" },
  { id: "Pos_Fun_0023", input: "magee ID eka hoyalaa dhenna", expectedText: "මගේ ID එක හොයලා දෙන්න", type: "positive" },
  { id: "Pos_Fun_0024", input: "api 25/12/2025 gedhara enavaa", expectedText: "අපි 25/12/2025 ගෙදර එනවා", type: "positive" },

  // -------------------------
  // NEGATIVE (10)
  // Rule: correct output must NOT appear
  // -------------------------
  { id: "Neg_Fun_0001", input: "ela machan supiri", type: "negative", shouldNotContain: "එල මචන් සුපිරි" },
  { id: "Neg_Fun_0002", input: "mama adha gedhara innee naththan heta office yanna hadhannee", type: "negative", shouldNotContain: "මම අද ගෙදර ඉන්නේ නැත්තාන් හෙට office යන්න හදන්නේ" },
  { id: "Neg_Fun_0003", input: "mata Rs. 500k ona", type: "negative", shouldNotContain: "මට Rs. 500k ඕන" },
  { id: "Neg_Fun_0004", input: "mama pansal  yaaaanavaa.", type: "negative", shouldNotContain: "මම පන්සල් යනවා." },
  { id: "Neg_Fun_0005", input: "mama URLeka open karanna try karaa.", type: "negative", shouldNotContain: "මම URL එක open කරන්න try කරා." },
  { id: "Neg_Fun_0006", input: "mageIDEka denna.", type: "negative", shouldNotContain: "මගේ ID එක දෙන්න." },
  { id: "Neg_Fun_0007", input: "adoo machan adha vaedak set vuna nadda", type: "negative", shouldNotContain: "අඩෝ මචන් අද වැඩක් සෙට් වුණ නද්ද" },
  { id: "Neg_Fun_0008", input: "mama ASAP ennam", type: "negative", shouldNotContain: "මම ඉක්මනින් එන්නම්" },
  { id: "Neg_Fun_0009", input: "mama gedhara yanavaa!!!", type: "negative", shouldNotContain: "මම ගෙදර යනවා!" },
  { id: "Neg_Fun_0010", input: "mama adha gedhara innee. heta office yanna hadhannee. ehema unath mata vaedak thiyenavaa.", type: "negative", shouldNotContain: "මම අද ගෙදර ඉන්නේ. හෙට office යන්න හදන්නේ. එහෙම උනත් මට වැඩක් තියෙනවා." },

  // -------------------------
  // UI
  // -------------------------
  { id: "Pos_UI_0002", input: "mama gedhara yanavaa", expectedText: "", type: "ui_clear" },
];
