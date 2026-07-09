import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  /** omit on the last item — it renders as the current page, not a link */
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

/**
 * Accessible breadcrumb trail (nav > ol, aria-current on the active page).
 * Items with `to` render as links; the last item is the current page.
 */
const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={`${item.label}-${i}`}>
              {i > 0 && (
                <ChevronRight
                  size={14}
                  aria-hidden
                  className="shrink-0 text-[#EDF0F7]/40"
                />
              )}
              <li>
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="font-medium text-[#EDF0F7]/60 transition-colors hover:text-[#7E62F3]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="font-semibold text-[#7E62F3]"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
