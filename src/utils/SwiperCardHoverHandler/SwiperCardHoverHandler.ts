let timeoutRef: NodeJS.Timeout | null = null;
export const cardImgHoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  const img = target.children[0] as HTMLDivElement;
  const dots = target?.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;

  if (timeoutRef) {
    clearTimeout(timeoutRef);
  }

  let number = Math.floor(target.scrollLeft / img.clientWidth);
  const updateActiveDot = () => {
    dots.forEach((dot) => dot.classList.remove("active"));
    number = (number + 1) % dots.length;
    dots[number].classList.add("active");
    target.scrollLeft = number * img.clientWidth;
    timeoutRef = setTimeout(updateActiveDot, 1500);
  };

  timeoutRef = setTimeout(updateActiveDot, 1500);
};

export const cardImgLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  target.scrollLeft = 0;
  const dots = target?.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;
  clearTimeout(timeoutRef as NodeJS.Timeout);

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[0].classList.add("active");
};
