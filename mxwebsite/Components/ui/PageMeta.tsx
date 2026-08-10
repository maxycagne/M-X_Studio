import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
}

const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta("name", "description", description);
    ensureMeta("property", "og:title", title);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:type", "website");
  }, [title, description]);

  return null;
};

export default PageMeta;
