import { useContext } from "react";
import { QuoteModalContext } from "./quoteModalContextInstance";

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return ctx;
}
