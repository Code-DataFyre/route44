import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { QuoteModalContext } from "./quoteModalContextInstance";

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState("");
  const [nonce, setNonce] = useState(0);

  const value = useMemo(
    () => ({
      isOpen,
      service,
      nonce,
      open: (serviceTitle = "") => {
        setService(serviceTitle);
        setIsOpen(true);
        setNonce((n) => n + 1);
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, service, nonce],
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
    </QuoteModalContext.Provider>
  );
}

QuoteModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
