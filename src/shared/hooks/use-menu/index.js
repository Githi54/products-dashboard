export const useMenu = () => {
  function getMenuItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  return { getMenuItem };
};
