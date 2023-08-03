import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.status(200));
  }),

  rest.get("/user", (req, res, ctx) => {
    const isAuth = sessionStorage.getItem("is-authenticated");

    if (!isAuth) {
      return res(ctx.status(403), ctx.json({ errorMessage: "Not Authorized" }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        usename: "admin",
      })
    );
  }),
];
