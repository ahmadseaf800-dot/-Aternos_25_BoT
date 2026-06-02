function aiReply(message) {
  message = message.toLowerCase();

  // عربي
  if (message.includes("مرحبا") || message.includes("السلام")) {
    return "أهلاً 👋 أنا بوت ذكي داخل السيرفر!";
  }

  if (message.includes("مساعدة") || message.includes("help")) {
    return "أكيد 🤖 أنا موجود للمساعدة داخل السيرفر";
  }

  if (message.includes("كيف الحال")) {
    return "تمام الحمدلله 😄 كيفك أنت؟";
  }

  if (message.includes("سيرفر")) {
    return "هذا سيرفر يعمل بواسطة بوتات ذكية 😈";
  }

  if (message.includes("بوت")) {
    return "نعم 🤖 أنا بوت داخل ماينكرافت";
  }

  // إنجليزي + عربي عام
  return "ما فهمت تمامًا 🤔 لكن أنا أتعلم باستمرار!";
}

module.exports = aiReply;