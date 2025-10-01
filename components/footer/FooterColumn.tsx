import React from "react";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-medium mb-4">{title}</h4>
      <ul
        className="space-y-2 text-sm"
        style={{
          fontWeight: "100",
          fontSize: "14px",
          color: "#000000ff",
        }}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="hover:opacity-90 text-muted-foreground hover:text-primary "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
