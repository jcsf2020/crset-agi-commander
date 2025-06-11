var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/sendEmail.ts
var sendEmail_exports = {};
__export(sendEmail_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(sendEmail_exports);
var handler = async (event) => {
  const { nome, email, empresa, mensagem } = JSON.parse(event.body || "{}");
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      origin: "http://localhost"
    },
    body: JSON.stringify({
      service_id: "service_us4jjnk",
      template_id: "lead_reply_crset",
      user_id: "7R0HNDeWf4W5I1lUxJ",
      template_params: {
        nome,
        email,
        empresa,
        mensagem
      }
    })
  });
  if (res.status === 200) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }
  const error = await res.text();
  return {
    statusCode: 400,
    body: JSON.stringify({ error })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=sendEmail.js.map
