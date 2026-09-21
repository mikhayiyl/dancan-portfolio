import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `Dancan | ${title}`;

    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      );

      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}

export default SEO;
