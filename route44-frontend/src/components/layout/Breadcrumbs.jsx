import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span className="material-symbols-outlined text-[14px] text-white/40">
                chevron_right
              </span>
            )}
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="font-label-sm text-label-sm text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-label-sm text-label-sm text-white">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
};

export default Breadcrumbs;
