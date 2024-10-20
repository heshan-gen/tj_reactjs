import { Link } from "@mui/material";
import router from 'next/router';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
// components/CommonFooter.tsx
export default function CommonFooter() {
  const footerMenuLinks = [
    { name: "Home", route: "/" },
    { name: "Banner promotions", route: "/banner-promotions" },
    { name: "Top Employers", route: "/top-employers" },
    { name: "T & C", route: "/terms-and-conditions" },
    { name: "Privacy Policy", route: "/privacy-policy" },
    { name: "Security Policy", route: "/security-policy" },
    { name: "FAQ", route: "/faq" },
    { name: "Media Room", route: "/media-room" },
    { name: "Partners", route: "/partners" },
    { name: "LMI", route: "/lmi" },
    { name: "Contact Us", route: "/contact-us" },
    { name: "Sitemap", route: "/sitemap" },
  ];

  const handlePageClick = (route: string) => {
    router.push(route);  // Use router to navigate
  };

  return (
    <footer>
      <div className="top">
        {footerMenuLinks.map((menu) => (
          <Link key={menu.name} onClick={() => handlePageClick(menu.route)}>
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="bottom">
        Copyright © 2006-2024 Genesiis Software (Pvt) Ltd, All Rights Reserved.
      </div>
    </footer>
  );
}
