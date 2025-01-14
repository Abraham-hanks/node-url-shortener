import {
  aboutPage,
  renderLandingPage,
  validateOwnDomain,
  validateCookie,
  urlAlreadyTrimmedByUser,
  stripUrl,
  customUrlExists
} from "../middlewares/middlewares";
import {
  getUrlAndUpdateCount,
  trimUrl,
  deleteUrl,
  redirectUrl
} from "../controllers/urlController";

export const initRoutes = app => {
  app.get("/", validateCookie, renderLandingPage);
  app.get("/about", (req, res) => res.status(200).render("about"));
  app.post("/", stripUrl, validateOwnDomain, urlAlreadyTrimmedByUser, customUrlExists, trimUrl);
  app.get("/about", aboutPage);

  app.get("/:id", getUrlAndUpdateCount);
  app.all("*", (req, res) => res.status(404).render("error"));
};
