// File: src/index.ts

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const t = url.searchParams.get("t");
    const b = url.searchParams.get("b");

    let redirectUrl = "https://trethanhphat.com";

    if (t) {
      redirectUrl += `/?t=${t}`;
    } else if (b) {
      redirectUrl += `/?b=${b}`;
    }

    return Response.redirect(redirectUrl, 301);
  },
};
