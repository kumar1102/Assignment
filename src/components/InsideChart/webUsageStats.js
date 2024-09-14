

  export const temp = [
    {
      label: 'Total Applicant',
      value: 80,
    },
    {
      label: 'Not Reviewed',
      value: 20,
    },
  ];
  
  export const platforms = [
    {
      label: 'Mobile',
      value: 80,
    },
    {
      label: 'Desktop',
      value: 20,
    },
  ];
  
  const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));
  
  export const mobileAndDesktopOS = [
    ...temp.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
      value: normalize(v.value, platforms[0].value),
    })),
  ];
  
  export const valueFormatter = (item) => `${item.value}%`;
  