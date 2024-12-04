"use client";
import React from "react";

const footerData = {
  footer: {
    wrapperFooterId: "wrapper-footer",
    sections: [
      {
        type: "leftColumn",
        image: {
          src: "http://fp-nugen.local/wp-content/uploads/2024/10/IMG-20241124-WA0000.jpg",
          alt: "Développeur Web Freelance Florian Perrier",
        },
        title: "Développeur Web Freelance",
        description: [
          "<strong>Développeur Web Freelance</strong>, je suis à votre disposition pour répondre à tous types de projets de <strong>création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web</strong>.",
          "Passionné par les technologies Web, je mets mes compétences au service de vos besoins dans divers domaines.",
        ],
        aboutTitle: "À Propos",
        aboutLinks: [
          {
            text: "Développeur web freelance",
            href: "https://www.florianperrier.com/",
          },
          {
            text: "Contact",
            href: "https://www.florianperrier.com/contacter-developpeur-web-freelance/",
          },
        ],
      },
      {
        type: "rightColumn",
        sections: [
          {
            title: "Création site internet",
            links: [
              { text: "Création de site vitrine", href: "#" },
              { text: "Création de site e-commerce", href: "#" },
              { text: "Développement WordPress", href: "#" },
            ],
          },
          {
            title: "Développeur WordPress",
            links: [
              { text: "Développement WordPress", href: "#" },
              { text: "Maintenance WordPress", href: "#" },
              { text: "Dépannage WordPress", href: "#" },
            ],
          },
          {
            title: "Services",
            links: [
              { text: "Référencement SEO", href: "#" },
              { text: "Développement d’application mobile", href: "#" },
              { text: "Tous les services", href: "#" },
            ],
          },
          {
            title: "Solutions",
            links: [
              { text: "Hébergement", href: "#" },
              { text: "Infogérance", href: "#" },
              { text: "Support", href: "#" },
            ],
          },
          {
            title: "Urgences",
            links: [
              { text: "Dépannage site internet", href: "#" },
              { text: "Dépannage WordPress", href: "#" },
              { text: "Dépannage Woocommerce", href: "#" },
            ],
          },
          {
            title: "Contact",
            links: [
              { text: "242 boulevard Voltaire, 75011 Paris", href: "#" },
              { text: "+33 (0)6 46 52 57 93", href: "tel:+33646525793" },
              { text: "contact@nugen.com", href: "mailto:contact@nugen.com" },
            ],
          },
        ],
      },
    ],
    footerBottom: {
      text: "&copy; 2024 Florian Perrier - Tous droits réservés.",
    },
  },
};

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-10"
      id={footerData.footer.wrapperFooterId}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-8">
          {/* Left Column */}
          {footerData.footer.sections.map((section, index) => {
            if (section.type === "leftColumn") {
              return (
                <div key={index} className="w-full md:w-1/3">
                  {section.image && (
                    <img
                      src={section.image?.src}
                      alt={section.image?.alt}
                      className="mb-4"
                    />
                  )}
                  <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                  {section.description?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm mb-4"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                  ))}
                  <h4 className="font-bold text-lg mt-6">
                    {section.aboutTitle}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {section.aboutLinks?.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="hover:underline">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Right Column Sections
            if (section.type === "rightColumn") {
              return (
                <div key={index} className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                  {section.sections?.map((subSection, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-bold text-lg mb-3">
                        {subSection.title}
                      </h4>
                      <ul className="space-y-2">
                        {subSection.links?.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.href} className="hover:underline">
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm">
          {footerData.footer.footerBottom.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
