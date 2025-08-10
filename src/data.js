const initialLinks = [
    {
      id: 1,
      original: "https://example.com/landing-page-1",
      short: "https://short.ly/a1b2",
      clicks: 154,
    },
    {
      id: 2,
      original: "https://example.com/blog/react-hooks-guide",
      short: "https://short.ly/c3d4",
      clicks: 87,
    },
    {
      id: 3,
      original: "https://example.com/pricing",
      short: "https://short.ly/e5f6",
      clicks: 412,
    },
    {
      id: 4,
      original: "https://example.com/signup",
      short: "https://short.ly/g7h8",
      clicks: 236,
    },
    {
      id: 5,
      original: "https://example.com/contact",
      short: "https://short.ly/i9j0",
      clicks: 61,
    },
  ].map((item) => ({
    ...item,
    qr: `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(
      item.short
    )}`,
  }));

export default initialLinks;
