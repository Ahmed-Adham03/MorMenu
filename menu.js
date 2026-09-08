var MOR_STORAGE_KEY = "mor_menu_v1";

var MOR_DEFAULT = {
  cafe: { en: "Our Menu" },
  sections: [
    {
      en: "Hot Drinks",
      ar: "المشروبات الساخنة",
      items: [
        { ar: "سبانيش لاتيه صغير", en: "Spanish Latte Hot – Small", size: "9 oz", price: "11" },
        { ar: "سبانيش لاتيه كبير", en: "Spanish Latte Hot – Large", size: "12 oz", price: "13" },
        { ar: "كابتشينو صغير", en: "Cappuccino – Small", size: "9 oz", price: "10" },
        { ar: "كابتشينو كبير", en: "Cappuccino – Large", size: "12 oz", price: "12" },
        { ar: "كورتدو", en: "Cortado", size: "7 oz", price: "9" },
        { ar: "ماكياتو", en: "Macchiato", size: "7 oz", price: "9" },
        { ar: "فلات وايت", en: "Flat White", size: "9 oz", price: "11" },
        { ar: "لاتيه صغير", en: "Latte – Small", size: "9 oz", price: "10" },
        { ar: "لاتيه كبير", en: "Latte – Large", size: "12 oz", price: "12" },
        { ar: "هوت شوكليت صغير", en: "Hot Chocolate – Small", size: "9 oz", price: "8" },
        { ar: "هوت شوكليت كبير", en: "Hot Chocolate – Large", size: "12 oz", price: "11" },
        { ar: "ماتشا ساخن", en: "Matcha Hot", size: "9 oz", price: "12" }
      ]
    },
    {
      en: "Coffee",
      ar: "القهوة",
      items: [
        { ar: "قهوة اليوم صغير (ساخن)", en: "Today's Coffee Hot – Small", size: "9 oz", price: "4.5" },
        { ar: "قهوة اليوم صغير (بارد)", en: "Today's Coffee Iced – Small", size: "9 oz", price: "4.5" },
        { ar: "قهوة اليوم كبير (ساخن)", en: "Today's Coffee Hot – Large", size: "12 oz", price: "6.9" },
        { ar: "قهوة اليوم كبير (بارد)", en: "Today's Coffee Iced – Large", size: "12 oz", price: "6.9" },
        { ar: "V60 صغير (ساخن)", en: "V60 Hot – Small", size: "11 oz", price: "10" },
        { ar: "V60 كبير (ساخن)", en: "V60 Hot – Large", size: "12 oz", price: "12" },
        { ar: "V60 صغير (بارد)", en: "V60 Iced – Small", size: "11 oz", price: "10" },
        { ar: "V60 كبير (بارد)", en: "V60 Iced – Large", size: "12 oz", price: "12" },
        { ar: "أمريكانو", en: "Americano", size: "9 oz", price: "9" },
        { ar: "إسبريسو سنقل", en: "Espresso Single", size: "7 oz", price: "5" },
        { ar: "إسبريسو دبل", en: "Espresso Double", size: "7 oz", price: "8" },
        { ar: "قهوة تركي صغير", en: "Turkish Coffee – Small", size: "7 oz", price: "7" },
        { ar: "قهوة تركي كبير", en: "Turkish Coffee – Large", size: "9 oz", price: "9" }
      ]
    },
    {
      en: "Tea",
      ar: "الشاي",
      items: [
        { ar: "شاي كرك", en: "Karak Tea", size: "9 oz", price: "5" },
        { ar: "شاي إنجليزي", en: "English Tea", size: "9 oz", price: "5" },
        { ar: "شاي عادي", en: "Regular Tea", size: "9 oz", price: "3" },
        { ar: "شاي بالحليب", en: "Milk Tea", size: "9 oz", price: "4" }
      ]
    },
    {
      en: "Cold Drinks",
      ar: "المشروبات الباردة",
      items: [
        { ar: "كركدية صغير", en: "Hibiscus – Small", size: "11 oz", price: "8" },
        { ar: "كركدية كبير", en: "Hibiscus – Large", size: "16 oz", price: "9" },
        { ar: "سبانيش لاتيه ايس صغير", en: "Spanish Latte Iced – Small", size: "12 oz", price: "12" },
        { ar: "سبانيش لاتيه ايس كبير", en: "Spanish Latte Iced – Large", size: "16 oz", price: "15" },
        { ar: "ماتشا ايس", en: "Matcha Iced", size: "12 oz", price: "14" },
        { ar: "تي ايس صغير", en: "Iced Tea – Small", size: "12 oz", price: "12" },
        { ar: "تي ايس كبير", en: "Iced Tea – Large", size: "16 oz", price: "15" },
        { ar: "أمريكانو ايس", en: "Iced Americano", size: "12 oz", price: "10" },
        { ar: "لاتيه ايس", en: "Iced Latte", size: "12 oz", price: "12" },
        { ar: "ماكياتو كراميل ايس", en: "Iced Caramel Macchiato", size: "13 oz", price: "13" },
        { ar: "لاتيه بيستاشيو ايس", en: "Iced Pistachio Latte", size: "12 oz", price: "14" },
        { ar: "موكا وايت ايس", en: "Iced White Mocha", size: "12 oz", price: "13" },
        { ar: "موكا ايس صغير", en: "Mocha Iced – Small", size: "12 oz", price: "12" },
        { ar: "موكا ايس كبير", en: "Mocha Iced – Large", size: "16 oz", price: "15" },
        { ar: "موهيتو ايس", en: "Mojito Iced", size: "12 oz", price: "10" }
      ]
    }
  ]
};

function morLoadDefault() {
  return JSON.parse(JSON.stringify(MOR_DEFAULT));
}

function morLoad() {
  try {
    var raw = localStorage.getItem(MOR_STORAGE_KEY);
    if (raw) {
      var cfg = JSON.parse(raw);
      if (cfg && cfg.sections && cfg.cafe) return cfg;
    }
  } catch (e) {}
  return morLoadDefault();
}

function morSave(cfg) {
  try {
    localStorage.setItem(MOR_STORAGE_KEY, JSON.stringify(cfg));
    return true;
  } catch (e) {
    return false;
  }
}

function morReset() {
  try {
    localStorage.removeItem(MOR_STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

function morEscape(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}