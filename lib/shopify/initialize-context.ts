import "@shopify/shopify-api/adapters/web-api";
import {
  shopifyApi,
  LATEST_API_VERSION,
  LogSeverity,
} from "@shopify/shopify-api";

const shopify = shopifyApi({
  apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.NEXT_PUBLIC_SHOPIFY_API_SECRET || "",
  scopes: process.env.SCOPES?.split(",") || ["write_products"],
  hostName: process.env.HOST?.replace(/https?:\/\//, "") || "",
  hostScheme: "http",
  isEmbeddedApp: true,
  apiVersion: LATEST_API_VERSION,
  logger: {
    level:
      process.env.NODE_ENV === "development"
        ? LogSeverity.Debug
        : LogSeverity.Error,
  },
});

export default shopify;
