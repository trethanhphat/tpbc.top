// File: src/index.ts

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const t = url.searchParams.get("t");
    const b = url.searchParams.get("b");

    let redirectUrl = "https://app.trethanhphat.vn";

    if (t) {
      redirectUrl += `/tree/${t}`;
    } else if (b) {
      redirectUrl += `/batch/${b}`;
    }

    return Response.redirect(redirectUrl, 301);
  },
};
