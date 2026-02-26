export const smoothScrollTo = (targetId: string, offset: number = 80) => {
  const element = document.getElementById(targetId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  offset: number = 80,
) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (!href) return;

  const targetId = href.replace("#", "");
  smoothScrollTo(targetId, offset);
};
