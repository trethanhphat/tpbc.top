// File: src/index.ts

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const targetParam = url.searchParams.get("t");

    if (targetParam) {
      return Response.redirect(
        `https://trethanhphat.com/?t=${targetParam}`,
        301
      );
    }

    return Response.redirect("https://trethanhphat.com", 302);
  },
};
